import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducers from './reducers/index'

const initialState = {}
const middleware = [thunk]

export default configureStore(
  { reducer: rootReducers },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
