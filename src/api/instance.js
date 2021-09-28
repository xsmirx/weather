import { create } from "axios";

export const apiKey = "126fad45ab3e35a9cdeb368c5606d982";

const instance = create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: apiKey,
    units: "metric",
  },
});

export default instance;
