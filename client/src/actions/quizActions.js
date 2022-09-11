import axios from 'axios'
import { toast } from 'react-toastify'

import {
  GET_ERRORS,
  GET_ALL_QUIZ_CATEGORIES,
  UPDATE_QUIZ_CATEGORY,
  ADD_QUIZ_CATEGORY
} from './types'

import { API_URL } from '../common/Constant'

// Get all Quiz Categories
export const getAllQuizCategories = () => dispatch => {
  axios
    .get(API_URL + '/quiz/getAllQuizCategories')
    .then(result => {
      dispatch(getAllQuizCategoriesAction(result))
    })
    .catch(
      err => console.log('🚀 ~ file: quiActions.js ~ line 40 ~ err', err)
      // dispatch({type: GET_ERRORS, payload: err.response})
    )
}

// Update Quiz Categories
export const updateQuizCategory = (payload, state) => dispatch => {
  axios
    .post(API_URL + '/quiz/updateQuizCategory', payload)
    .then(result => {
      dispatch(updateQuizCategoryAction(result))
      toast.success('Quiz Categories updated successfully')
    })
    .catch(
      err => console.log('🚀 ~ file: quiActions.js ~ line 40 ~ err', err)
      // dispatch({type: GET_ERRORS, payload: err.response})
    )
}

// /Update Profession
export const addQuizCategory = payload => dispatch => {
  axios
    .post(API_URL + '/quiz/saveQuizCategory', payload)
    .then(result => {
      dispatch(addQuizCategoryAction(result))
      axios
        .get(API_URL + '/profile/getAllQuizCategories')
        .then(result => {
          dispatch(getAllQuizCategoriesAction(result))
        })
        .catch(
          err => console.log('🚀 ~ file: quiActions.js ~ line 40 ~ err', err)
          // dispatch({type: GET_ERRORS, payload: err.response})
        )
      toast.success('Profession added successfully')
    })
    .catch(
      err => console.log('🚀 ~ file: addQuizCategory.js ~ line 40 ~ err', err)
      // dispatch({type: GET_ERRORS, payload: err.response})
    )
}

//Add Profession
export const addQuizCategoryAction = res => {
  return { type: ADD_QUIZ_CATEGORY, payload: res }
}

// Update Profession
export const updateQuizCategoryAction = res => {
  return { type: UPDATE_QUIZ_CATEGORY, payload: res }
}

// Profile loading
export const getAllQuizCategoriesAction = res => {
  return { type: GET_ALL_PROFESSIONS, payload: res }
}
