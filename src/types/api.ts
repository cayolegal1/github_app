import type { AxiosRequestConfig, AxiosResponse } from "axios";

type HttpAceptedMethods = "GET";

export type Request = {
  axiosConfig: AxiosRequestConfig;
  method: HttpAceptedMethods;
  url: string;
};

