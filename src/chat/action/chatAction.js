import * as types from "../actionTypes";
import * as chatApi from "../api/chatApi";

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

export function saveChatSuccess(chat) {
  return { type: types.SAVE_CHAT_SUCCESS, chat };
}

export function loadChat(loadedChat) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch) {
    dispatch(loadChatSuccess(loadedChat));
  };
}

export function loadChatSuccess(chatList) {
  return { type: types.LOAD_CHAT_SUCCESS, chatList };
}

export function getAllMessages() {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch) {
    return chatApi
      .getAllMessages()
      .then(chatList => {
        dispatch(loadAllChatSuccess(chatList));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadAllChatSuccess(chatList) {
  return { type: types.LOAD_ALL_CHAT_SUCCESS, chatList };
}
