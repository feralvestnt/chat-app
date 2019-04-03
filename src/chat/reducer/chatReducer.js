import * as types from "../actionTypes";
import initialState from "../../reducers/initialState";

export default function chatReducer(state = initialState.chatList, action) {
  switch (action.type) {
    case types.LOAD_CHAT_SUCCESS:
      return action.chatList;
    case types.LOAD_ALL_CHAT_SUCCESS:
      return action.chatList.data;
    case types.SAVE_CHAT_SUCCESS:
      return [...state, { ...action.chat.data }];
    default:
      return state;
  }
}
