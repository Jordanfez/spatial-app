import axios from "axios";

const instance = axios.create({
  baseURL: "https://panafrican-space.net/api",
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});

export default instance;
