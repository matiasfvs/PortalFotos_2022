import Left from '../components/loginComponents/LoginLeft'
import Right from '../components/loginComponents/LoginRight'



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
