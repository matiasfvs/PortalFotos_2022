// Imports: Dependencies
import { combineReducers } from "redux";

// Imports: Reducers
import loginReducer from './loginReducer'
import fotoReducer from './fotoReducer'
import zonasReducer from './zonasReducer'

// Redux: Root Reducer
export const rootReducer = combineReducers({
    loginReducer:loginReducer,
    fotoReducer:fotoReducer,
    zonasReducer:zonasReducer,

});