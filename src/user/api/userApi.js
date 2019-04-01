import axios from "axios";

const baseUrl = process.env.API_URL;

export function enterChat(user) {
  return axios.post(baseUrl + "/user", user);
}
