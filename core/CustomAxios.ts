import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class CustomAxios {
  private setTokenCookie;
  private getTokenCookie;
  private handleTimeout;
  private axiosInstance: AxiosInstance;

  constructor(
    setTokenCookie: (token: string) => void,
    getTokenCookie: () => string | null,
    handleTimeout: (error: { response: any }) => void,
    config?: AxiosRequestConfig
  ) {
    this.setTokenCookie = setTokenCookie;
    this.getTokenCookie = getTokenCookie;
    this.handleTimeout = handleTimeout;

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
    const setCookieHeader = response.headers["Set-cookie"];

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
      this.handleTimeout(error);
      return;
    }

    return Promise.reject(error);
  }

  public getInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}
