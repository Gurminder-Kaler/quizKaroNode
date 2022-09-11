import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

import {
  GET_ALL_USERS,
  GET_ERRORS,
  GET_USER_VIA_ID,
  UPDATE_USER
} from './types'

// Register User
const API_URL = 'http://localhost:8001'
export const getAllUsers = () => dispatch => {
  axios
    .post(API_URL + '/user/getAllUsers')
    .then(users => {
      dispatch(getAllUsersAction(users))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: 'err.response.data'
      })
    )
}
export const getUserViaId = id => dispatch => {
  console.log('id', id)
  let data = {
    userId: id
  }
  axios
    .post(API_URL + '/user/getUserViaId', data)
    .then(user => {
      dispatch(getUserViaIdAction(user))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    )
}
export const updateUser = (userData, history) => dispatch => {
  axios
    .post(API_URL + '/user/updateUser', userData)
    .then(result => {
      if (result.data.success) {
        dispatch(updateUserAction(result))
        history.push('/admin/user')
        toast.success(result.data.message, { autoClose: 2300 })
      } else {
        toast.warning(result.data.message, { autoClose: 2300 })
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    )
}

export const getAllUsersAction = users => {
  return {
    type: GET_ALL_USERS,
    payload: users
  }
}

export const getUserViaIdAction = user => {
  console.log('getUserViaIdAction', user)
  return {
    type: GET_USER_VIA_ID,
    payload: user.data.data
  }
}
export const updateUserAction = user => {
  return {
    type: UPDATE_USER,
    payload: user
  }
}
