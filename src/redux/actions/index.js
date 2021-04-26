import { SIGN_UP_USER_INFO } from '../types';
import baseUrl from '../../Api/baseUrl';

export function fetchUserInfo(userInfo) {
  return {
    type: SIGN_UP_USER_INFO,
    payload: userInfo,
  };
}

export const registerUser = (
  firstName,
  lastName,
  email,
  password,
  SuccessRegistration,
) => {
  return dispatch => {
    baseUrl
      .post(`/auth/sign_up/`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem('token', res.data.auth_token);
        dispatch(fetchUserInfo(res.data));
        SuccessRegistration();
        console.log(`${localStorage.getItem('token')}`);
        baseUrl
          .post(`/auth/send_email_confirmation/`, res.data, {
            headers: {
              Authorization: `Token ${localStorage.getItem('token')}`,
            },
          })
          .then(res => {
            console.log(res);
            console.log(res.data);
          });
      });
  };
};

export const logInUser = (email, password, navigate) => {
  return dispatch => {
    baseUrl
      .post(`/auth/sign_in/`, {
        email: email,
        password: password,
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem('token', res.data.auth_token);
        dispatch(fetchUserInfo(res.data));
        navigate();
      });
  };
};
