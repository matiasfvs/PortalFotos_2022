import Left from '../components/loginComponents/LoginLeft'
import Right from '../components/loginComponents/LoginRight'
import React, {useEffect} from "react";
import '../styles.css'

const Login = ()=> {


    return ( 
     <div className='containerLogin'>
        <div className="alignLeft">
        <Left/>
        </div> 
        <div className="alignRight">
        <Right/>
        </div> 
     </div>

    )
}

export default Login;