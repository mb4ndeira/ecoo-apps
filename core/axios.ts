import { cookies } from "next/headers";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { USE_CASES } from "@shared/domain/use-cases";

class CustomAxios {
  private axiosInstance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      this.handleRequest.bind(this) as any,
      (error) => Promise.reject(error)
    );

    this.axiosInstance.interceptors.response.use(
      this.handleSuccessResponse.bind(this),
      (error) => Promise.reject(error)
    );
  }

  private handleSuccessResponse(response: AxiosResponse) {
    const setCookieHeader = response.headers["Set-cookie"];

    if (setCookieHeader)
      cookies().set("token", JSON.stringify(setCookieHeader));

    if (USE_CASES["login"].stubbed) cookies().set("token", "blabla");

    return response;
  }

  private handleRequest(config: AxiosRequestConfig) {
    if (USE_CASES["login"].stubbed) cookies().set("token", "blabla");

    if (config.headers !== undefined && cookies().get("token"))
      config.headers.Authorization = `Bearer ${JSON.parse(
        cookies().get("token")?.value as string
      )}`;

    return config;
  }

  public getInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

export const axiosInstance = new CustomAxios().getInstance();
