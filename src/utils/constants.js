export const newsApiKey = "a5c4469010ce4e56be02f514eee645d5";
export const dateLastWeek = new Date(Date.now() - 7 * 24 * 3600 * 1000)
  .toISOString()
  .substring(0, 10);
export const dateToday = new Date(Date.now()).toISOString().substring(0, 10);

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwrzc.port0.org"
    : "http://localhost:3001";
