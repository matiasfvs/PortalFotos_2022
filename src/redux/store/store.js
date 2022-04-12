import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers";

//usando solamente thunk como middleware
//const store = createStore(rootReducers, applyMiddleware(thunk));

//extension para desarrolladores integrada con chrome y thunk como middleware
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export {store};