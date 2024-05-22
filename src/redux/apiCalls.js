import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
    console.log(err)
  }
};
export const deleteUser = (id, dispatch) => {
  dispatch(deleteUserStart());
  userRequest.delete(`/users/${id}`)
    .then(() => {
      dispatch(deleteUserSuccess());
      localStorage.removeItem('user');
    })
    .catch((err) => {
      dispatch(deleteUserFailure());
    });
};