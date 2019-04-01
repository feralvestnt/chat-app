import { combineReducers } from "redux";
import chat from "../chat/reducer/chatReducer";
import user from "../user/reducer/userReducer";

const rootReducer = combineReducers({
  chat,
  user
});

export default rootReducer;
