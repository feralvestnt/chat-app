import * as types from "../actionTypes";
import * as chatApi from "../api/chatApi";

export function loadChatSuccess(chatList) {
  return { type: types.LOAD_CHAT_SUCCESS, chatList };
}

export function saveChatSuccess(chat) {
  return { type: types.SAVE_CHAT_SUCCESS, chat };
}

export function save(chat) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch) {
    return chatApi
      .save(chat)
      .then(savedChat => {
        dispatch(saveChatSuccess(savedChat));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadChat() {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch) {
    return chatApi
      .loadChat()
      .then(chatList => {
        dispatch(loadChatSuccess(chatList));
      })
      .catch(error => {
        throw error;
      });
  };
}
