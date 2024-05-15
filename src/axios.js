import axios from "axios";

const instance = axios.create({
  // baseURL: "https://panafrican-space.net/api",
  baseURL: "http://localhost:4000",
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});

export default instance;
