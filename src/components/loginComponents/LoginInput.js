import React,{Fragment,useState} from 'react'
import LoginButton from './LoginButton'
import '../../styles.css'

const LoginInput = () => {

const [datos,setDatos] = useState({
    user : '',
    password:''
})

const handleInputChange = (event) => {
    //console.log(event.target.value)

    setDatos({
        ...datos,
        [event.target.name] : event.target.value,
    })
    
}

//console.log(datos.password)

return(
    <Fragment>
        <div className='contentRight'>
            <input type="text" name="user" onChange={handleInputChange} className='inputLogin'/>
            <br></br>
            <br></br>
            <input type="password" name="password" onChange={handleInputChange} className='inputLogin'/>
            <br></br>
            <br></br>
            <LoginButton user={datos.user} password={datos.password}/>
        </div>
    </Fragment>
)}

export default LoginInput;
