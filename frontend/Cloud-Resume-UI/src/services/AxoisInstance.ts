import axios from "axios";

// const axoisInstance = axios.create({
//   baseURL: "http://localhost:7071/api",
// });

// https://cloudresumechallengedevfunctionapp.azurewebsites.net

const axoisInstance = axios.create({
  baseURL: "https://cloudresumechallengedevfunctionapp.azurewebsites.net/api",
  headers: {
    "x-functions-key":
      "",
  },
});

export default axoisInstance;
