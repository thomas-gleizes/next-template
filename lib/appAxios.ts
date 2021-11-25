import axios from "axios";

const appAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api/`,
  responseType: "json",
});

export default appAxios;
