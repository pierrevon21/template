import axios from "axios";
export const connecttoapi = () => {
  return axios.create({
    //baseURL: "https://apps.fastlogistics.com.ph/dormapi/api/",
    baseURL: "https://localhost:7028/api/",
  });
};
