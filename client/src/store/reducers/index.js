import { combineReducers } from 'redux'
import routeReducer from './state-slice'

export default combineReducers({
  route: routeReducer
})
