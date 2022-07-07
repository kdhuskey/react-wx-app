import { combineReducers, createStore, applyMiddleware } from 'redux'
import { searchReducer } from './reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'


const rootReducer = combineReducers({
  search: searchReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
