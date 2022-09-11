import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_ROLE,
  LOGOUT,
} from "../actions/types";
import isEmpty from "../../src/validations/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {},
  role: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case SET_CURRENT_USER_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    case LOGOUT:
      return {
        initialState,
      };
    default:
      return state;
  }
}
