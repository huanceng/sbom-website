import axios, { AxiosInstance } from "axios";

const SERVER_API_HOST = process.env.VUE_APP_SERVER_API_HOST;
console.log("VUE_APP_SERVER_API_HOST:" + SERVER_API_HOST)

const apiClient: AxiosInstance = axios.create({
  // baseURL: "http://localhost:13331/sbom",
  // baseURL: "https://sbom-service.test.osinfra.cn/sbom",
  baseURL: SERVER_API_HOST + `/sbom`,

  headers: {
    // "Content-type": "application/json",
  },
});

export default apiClient;
