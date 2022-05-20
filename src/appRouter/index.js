import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../screen/LoginScreen'
import Home from '../screen/HomeScreen'


const AppRouter = () => {

    //            
    return (
        <>
        
        <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={Home} />
        </Switch>
        </Router>

        </>
    )

}

export default AppRouter