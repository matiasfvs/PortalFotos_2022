import React from "react";
import { Provider } from "react-redux"
import { store } from "../src/redux/store/store";
//import './App.css';
import AppRoute from './appRouter/index'
import { BrowserRouter as Router } from "react-router-dom";
import { URL_BASENAME } from "./config/config2";

function App() {
  return (
    <div className="App">
        <Router basename={URL_BASENAME}>
        <Provider store={store}>
        <AppRoute/>
        </Provider>
        </Router>
    </div>
  );
}

export default App;