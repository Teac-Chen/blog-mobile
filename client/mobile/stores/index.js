import { createStore, combineReducers } from 'redux'
import todo from './reducers/todo'
import article from './reducers/article'

const combineReducer = combineReducers({
  todo,
  article,
})

export default initState => createStore(combineReducer, initState)
