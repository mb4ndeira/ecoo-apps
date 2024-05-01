export const isUnderConstruction = (pagePath: string) =>
  (process.env.PAGES_IN_CONSTRUCTION?.split(",") || []).includes(pagePath);
