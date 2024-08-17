import { newsApiKey, dateLastWeek, dateToday } from "./constants";
import { request } from "./api";

export const getResults = (keyword) => {
  return request(
    `https://newsapi.org/v2/everything?q=${keyword}&from=${dateLastWeek}&to=${dateToday}&pageSize=100&apiKey=${newsApiKey}`
  );
};
