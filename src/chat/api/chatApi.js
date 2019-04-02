import axios from "axios";

const baseUrl = process.env.API_URL;

export function getAllMessages() {
  return axios.get(baseUrl + "/chat");
}

export function save(chat) {
  return axios.post(baseUrl + "/chat", chat);
}
