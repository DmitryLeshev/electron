import { request } from "shared/utils";
import { request as reqConfig } from "shared/config";

export type Response<T> = {
  status: "success" | "error" | "faild";
  data?: T;
  message?: string;
  error?: string;
};

const http = request.Transport.create(reqConfig.exampleHttpUrl, {});

export const apiInstance =
  (controller: string) =>
  async <T>(data: any): Promise<Response<T>> => {
    const [method, params] = Object.entries(data)[0];
    return await http.send({ path: `${controller}/${method}`, args: params });
  };

Object.assign(window, {
  send: async (data: any) => {
    console.log("[SEND]", { data });
    const res = await http.send(data);
    console.log("[SEND]", { res });
    return res;
  },
});
