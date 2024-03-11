import { cookies } from "next/headers";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { USE_CASES } from "@shared/domain/use-cases";
import { WARNINGS } from "@shared/next/warnings";

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
      this.handleErrorResponse.bind(this)
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
      config.headers.Authorization = `Bearer ${
        cookies().get("token")?.value as string
      }`;

    return config;
  }

  private handleErrorResponse(error: { response: any }) {
    if (error.response === undefined) {
      console.error("Request failed at connection (custom Axios): ", error);
      return;
    }

    const response = error.response;
    console.error("Request failed (custom Axios): ", response.data);

    if (response.status === 400) {
      throw new Error(
        WARNINGS["server"]["general"]["invalid-body-error"]["server_message"]
      );
    }

    if (response.status === 409) {
      throw new Error(
        WARNINGS["server"]["/users"]["existent-user-error"]["server_message"]
      );
    }

    return Promise.reject(error.response.data);
  }

  public getInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

export const axiosInstance = new CustomAxios().getInstance();
