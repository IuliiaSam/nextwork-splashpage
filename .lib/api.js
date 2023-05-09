import { readFile } from "fs/promises";

export const getHomePageData = async () => {
  const response = await readFile("./content/usage.json", "utf-8");
  return JSON.parse(response);
};
