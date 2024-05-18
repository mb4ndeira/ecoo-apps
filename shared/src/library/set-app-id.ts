export const setAppID = (appID: "PRODUCER" | "CDD") => {
  process.env.APP_ID = appID;
};
