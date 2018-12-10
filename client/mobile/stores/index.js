import { createStore, combineReducers } from 'redux'
import todo from './reducers/todo'

const combineReducer = combineReducers({
  todo,
})

export default initState => createStore(combineReducer, initState)
