import * as types from "../actionTypes";
import * as userApi from "../api/userApi";

export function enteredUserSuccess(user) {
  return { type: types.ENTERCHAT_USER_SUCCESS, user };
}

export function enterChat(user) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch) {
    return userApi
      .enterChat(user)
      .then(enteredUser => {
        dispatch(enteredUserSuccess(enteredUser));
      })
      .catch(error => {
        throw error;
      });
  };
}
