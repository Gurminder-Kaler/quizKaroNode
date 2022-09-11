import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  SET_CURRENT_USER_ROLE,
  LOGOUT
} from './types'
import { API_URL } from '../common/Constant'

import { push } from 'connected-react-router'
// Register User
export const registerUser = (credentials, history) => dispatch => {
  axios
    .post(API_URL + '/user/signUp', credentials)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// Login - Get User Token
export const loginUser = credentials => dispatch => {
  console.log('credentials', credentials)
  axios
    .post(API_URL + '/user/signIn', credentials)
    .then(res => {
      if (res.data.success) {
        const { token } = res.data
        const { role } = res.data.data
        // Set token to ls
        localStorage.setItem('jwtToken', token)
        // Set token to Auth header
        setAuthToken(token)
        // Decode token to get user data
        const decoded = jwt_decode(token)
        // Set current user

        dispatch(setCurrentRole(role))
        localStorage.setItem('role', role)
        axios
          .post(API_URL + '/user/getUserViaId', { userId: decoded.userId })
          .then(r => {
            console.log('r', r)
            dispatch(setCurrentUser(r.data.data))
          })
      } else {
        dispatch({
          type: GET_ERRORS,
          payload:
            res.data && res.data.message
              ? res.data.message
              : 'Something Went Wrong'
        })
      }
    })
    .catch(
      err => console.log('err', err)
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data,
      // })
    )
}

// Log user out
export const logoutUser = history => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken')
  localStorage.removeItem('role')
  // Remove auth header for future requests
  setAuthToken(false)
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}))
  dispatch(setCurrentRole({}))
  dispatch(logoutUserAction)
  dispatch(push('/login'))

  // history.push("/login");
}

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// Set logged in user's role
export const setCurrentRole = role => {
  return {
    type: SET_CURRENT_USER_ROLE,
    payload: role
  }
}
export const logoutUserAction = () => {
  return {
    type: LOGOUT
  }
}
