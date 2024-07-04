import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class CustomAxios {
  private setTokenCookie: (token: string) => void;
  private getTokenCookie: () => string | null;
  private handleTimeout: (error: any) => Error | null;
  private handleForbidden: (error: any) => Error | null;
  private axiosInstance: AxiosInstance;

  constructor(
    setTokenCookie: (token: string) => void,
    getTokenCookie: () => string | null,
    handleTimeout: (error: any) => Error | null,
    handleForbidden: (error: any) => Error | null,
    config?: AxiosRequestConfig
  ) {
    this.setTokenCookie = setTokenCookie;
    this.getTokenCookie = getTokenCookie;
    this.handleTimeout = handleTimeout;
    this.handleForbidden = handleForbidden;

    this.axiosInstance = axios.create(config);
    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      this.handleRequest.bind(this) as any,
      (error: any) => Promise.reject(error)
    );

    this.axiosInstance.interceptors.response.use(
      this.handleSuccessResponse.bind(this),
      this.handleErrorResponse.bind(this)
    );
  }

  private handleSuccessResponse(response: AxiosResponse) {
    const setCookieHeader = response.headers["set-cookie"];

    if (setCookieHeader) {
      const tokenCookie = setCookieHeader.find((cookie: string) =>
        cookie.startsWith("token=")
      );

      if (tokenCookie) this.setTokenCookie(tokenCookie.split("=")[1]);
    }

    return response;
  }

  private handleRequest(config: AxiosRequestConfig) {
    if (config.headers !== undefined && this.getTokenCookie())
      config.headers.Authorization = `Bearer ${
        this.getTokenCookie() as string
      }`;

    return config;
  }

  private handleErrorResponse(error: { response: any }) {
    if (error.response === undefined) {
      const timeoutError = this.handleTimeout(error);

      if (timeoutError === null) return;

      throw timeoutError;
    }

    if (error.response.status === 403) {
      const forbiddenError = this.handleForbidden(error);

      if (forbiddenError === null) return;

      throw forbiddenError;
    }

    return Promise.reject(error);
  }

  public getInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}
