import { apiInstance, Response } from "./_base";
import type { Example } from "./models";

const CONTROLLER = "example";
const METODS = {
  INDEX: "index",
};

const exampleFetch = apiInstance(CONTROLLER);

export const getExampleData = async (): Promise<Response<Example>> => {
  return await exampleFetch({ [METODS.INDEX]: {} });
};
