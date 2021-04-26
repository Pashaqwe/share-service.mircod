import { SIGN_UP_USER_INFO } from '../types';

const initialState = {
  users: [],
  userInfo: {},
};

export const fetchUserInfo = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
