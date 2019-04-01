import * as types from "../actionTypes";
import initialState from "../../reducers/initialState";

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.ENTERCHAT_USER_SUCCESS:
      return action.user.data;
    default:
      return state;
  }
}
