import { createStore, combineReducers } from 'redux'
import app from './reducers/app'
import todo from './reducers/todo'
import article from './reducers/article'

const combineReducer = combineReducers({
  app,
  todo,
  article,
})

export default initState => createStore(combineReducer, initState)
