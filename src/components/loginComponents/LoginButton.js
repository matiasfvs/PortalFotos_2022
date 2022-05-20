// Imports: Dependencies
import React, { useState, useEffect } from "react";
import '../../styles.css'
//const loginController = require('../Controller/LoginController')
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// Imports: Redux Actions
import ActionCreators from "../../redux/actions";
import {useHistory} from "react-router-dom";

const LoginButton = ({user,password, loginOn, getLogin, error}) => {

   const history = useHistory();
   let userLogin = user
   let passLogin = password
   

   useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    console.log('LOGIN ON')
    if (loginOn) {
       return  (history.push('/home'))
    }

    if (error) {
     // flashMessage("danger", "Error de autentificacion", error.message);
    }
  }, [loginOn, error]);

  const loginOnPress = async (userLogin,passLogin) => {
    console.log( 'registro de consola '+ userLogin)
    console.log( 'registro de consola '+ passLogin)
    await getLogin(userLogin, passLogin);
  };

    return(
        <div>
            <button onClick={()=>loginOnPress(userLogin,passLogin)} className='buttonLogin'>Login </button>
        </div>
       
    )}
    
    const mapStateToProps = (state) => {
        // Redux Store --> Component
        return {
          ...state.loginReducer,
          loginOn: state.loginReducer.loggedIn,
          error: state.loginReducer.error,
        };
      };
      
      // Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
      function mapDispatchToProps(dispatch) {
        const combiner = Object.assign({}, ActionCreators);
        return bindActionCreators(combiner, dispatch);
      }
      
      // Exports
      export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);