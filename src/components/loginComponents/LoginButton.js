import '../../styles.css'
//const loginController = require('../Controller/LoginController')


const LoginButton = (props) => {

   let userLogin = props.user
   let passLogin = props.password

    function funcionValida(user,password){


        //console.log('funcion valida ')
        console.log( 'registro de consola '+ user)
        console.log( 'registro de consola '+ password)
        //alert(Object.values(user))
     //   console.log(loginController)
    }

    return(
        <div>
            <button onClick={()=>funcionValida(userLogin,passLogin)} className='buttonLogin'>Login </button>
        </div>
       
    )}
    
    export default LoginButton;
    