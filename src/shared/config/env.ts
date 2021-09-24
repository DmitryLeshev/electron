const getEnvVar = (key: string): any => {
  const envKey = import.meta.env[key];
  if (envKey === undefined) {
    throw new Error(`Env variable ${envKey} is required`);
  }
  return envKey;
};

export const APP: "EXAMPLE" = getEnvVar("VITE_APP_NAME");
export const EXAMPLE_API_URL = getEnvVar("VITE_EXAMPLE_API_URL");

export const MODE = getEnvVar("MODE");
export const DEV = getEnvVar("DEV");
export const PROD = getEnvVar("PROD");

console.log({ env: import.meta.env });
