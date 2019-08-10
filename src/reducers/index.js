import {combineReducers} from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

//This app has hard code a list of libraries inside the application. 
//Normally, you would update the rendered list on a server and not the app

//for every reducer that is created, it must be wired up to the combinedReducers

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
})