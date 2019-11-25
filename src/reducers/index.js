import {combineReducers} from 'redux'
import jAppReducer from './jAppReducer'

export default combineReducers({
	applications: jAppReducer
})