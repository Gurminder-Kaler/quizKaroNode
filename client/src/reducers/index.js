import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import userReducer from './userReducer'
import quizReducer from './quizReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  user: userReducer,
  quiz: quizReducer
})
