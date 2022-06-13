import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../redux/actions";
import React, { useEffect } from 'react';
import Menu_ from '../components/menuComponents/menu'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../styles.css'
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles({
  InputLabel:{
    fontSize:60,
    backgroundColor:'white',
  },
})

const HomeScreen =({data,zonas,getZonas})=>{

  const [semana, setSemana] = React.useState('');
  const classes = useStyles();

  const handleLogOut = async () => {
    console.log('cerrar sesion')
  }

  const handleChange = (event) => {
    setSemana(event.target.value);
    console.log(event.target.value)
  };

  useEffect(()=>{
    getZonas()
  }, [])

  function llenaCombo(){
    const fechas = [] 

    zonas.forEach(element => {
    fechas.push(element.fecha)
    })

    let set = new Set( fechas.map( JSON.stringify ) )
    let arrSinDuplicaciones = Array.from( set ).map( JSON.parse );

    return(
        <Select
          value={semana}
          label="Semana"
          onChange={handleChange}
          className={classes.InputLabel}
        >
          <MenuItem value={arrSinDuplicaciones[0]}>{arrSinDuplicaciones[0]}</MenuItem>
          <MenuItem value={arrSinDuplicaciones[1]}>{arrSinDuplicaciones[1]}</MenuItem>
        </Select>
    )

  }
  //
  const ImagesDatas = data

        return (
          <>
          <div className ='bannerMenu'>
              <div className='comboStyle'>Seleccione una Semana :  {llenaCombo()}</div>
              <div className='logoStyle'>DIV LOGO</div>
              <div className='loginOff'>
              <text>Cerrar Sesión</text> 
                <a href="/" onClick={()=>handleLogOut()} color="white">
                <svg xmlns="http://www.w3.org/2000/svg" background-color="#FFFFF" height="24" viewBox="0 0 24 24" width="24" color="#FFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>
              </a></div>
          </div>

          <div>
              <Menu_ dataJson={ImagesDatas} dataJsonZonas ={zonas} semana={semana}></Menu_>
          </div>
          </>
        );

}


const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    ...state.fotoReducer,
    data:state.fotoReducer.data,
    ...state.zonasReducer,
    zonas:state.zonasReducer.data
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
function mapDispatchToProps(dispatch) {
  const combiner = Object.assign({}, ActionCreators);
  return bindActionCreators(combiner, dispatch);
}

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);