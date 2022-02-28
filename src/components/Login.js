import Left from './loginComponents/LoginLeft'
import Right from './loginComponents/LoginRight'



const Login = ()=> {

    return ( 

     <div className='container'>
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
