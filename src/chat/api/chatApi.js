import axios from "axios";

const baseUrl = process.env.API_URL;

export function loadChat() {
  return axios.get(baseUrl + "/chat");
}

export function save(chat) {
  return axios.post(baseUrl + "/chat", chat);
}
