import type { AxiosRequestConfig } from "axios";

type HttpAceptedMethods = "GET";

export type Request = {
  axiosConfig: AxiosRequestConfig;
  method: HttpAceptedMethods;
  url: string;
};
