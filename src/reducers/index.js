import {combineReducers} from 'redux'
import LibraryReducer from './LibraryReducer'

//This app has hard code a list of libraries inside the application. 
//Normally, you would update the rendered list on a server and not the app

export default combineReducers({
    libraries: LibraryReducer
})