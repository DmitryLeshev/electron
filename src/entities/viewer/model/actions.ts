import { createEvent, createEffect } from "effector";

import { exampleApi } from "shared/api";

export const inputChangeLogin = createEvent<string>();
export const inputChangePassword = createEvent<string>();
export const inputChangeRepeatPassword = createEvent<string>();

export const logIn = createEvent();
export const logOut = createEvent();

export const viewerLogInFx = createEffect(
  (params: exampleApi.auth.LoginParams) => exampleApi.auth.login(params)
);

export const viewerLogOutFx = createEffect(() => exampleApi.auth.logout());
