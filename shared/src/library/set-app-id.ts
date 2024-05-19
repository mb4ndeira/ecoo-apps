import { AppID } from "./types/app-id";

export const setAppID = (appID: AppID) => {
  process.env.APP_ID = appID;
};
