import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../../redux/actions";
import React, { useState,useEffect } from "react";
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import zonas from '../../data/zonas.json'
import GaleriaImages from '../galeriaComponents/GaleriaImages'
import 'rc-menu/assets/index.css';
import '../../styles.css'
import LinearProgress from '@mui/material/LinearProgress';
const ImagesData = require('../../data/galeria.json')


const MenuComponent = ({getFoto,getZonas,dataJsonZonas,semana, data, isLoading}) => {
  const [keyCategoria, setkeyCategoria] = useState(0);
  const [keySala, setKeySala] = useState(0);
  const [imagenesSala,setImagenesSalas] = useState([])
  const [ImagesDatas,setImagenesData] = useState([])
 

  const onClick = (info) => {  
    setkeyCategoria()
    setImagenesData([])  
    setkeyCategoria(info)
    console.log('keycat',keyCategoria)

  }

  const onTitleClick = (info) => {
    console.log(info.key)
    setKeySala()
    setImagenesData([])
    setKeySala(info.key)
  }

  useEffect(async ()=>{
   setImagenesData([])
   await getFoto()
   await getZonas()
 
    const salaFiltrada = await data.filter(js => keySala == js.id_sala)
    setImagenesSalas(salaFiltrada)

    imagenesSala.filter(funFiltraCategoria)

  }, [keySala ,keyCategoria])


  const funFiltraCategoria = (dataSala) => {
   const arrayImage = []

   dataSala.data.map(function (value) {
       console.log('DENTRO MAP')
      if(value.id_categoria == keyCategoria){
        arrayImage.push(value.fotos)
      }
      
      });
       //console.log('arrayImage' ,arrayImage)
      setImagenesData(arrayImage)
     // return (arrayImage)
  }
 
 
  const funSubMenu = () => {

    const dataZonas= dataJsonZonas.filter(js => js.fecha === semana)

    try {
      return(
      
        dataZonas.map((v) => {
                  
             return (<SubMenu className='menu' key={v.id_zona} title={v.desc_zona}>
                 {
                     v.salas.map((i)=>{
                      return(  <SubMenu  key={i.id_sala} title={i.desc_sala} onTitleClick={(info) => onTitleClick(info)} > 
                    {
                       i.categorias.map((c)=>{
                        return(  <MenuItem  key={c.key_menu} onClick={()=>{onClick(c.id_pro_categoria)}}> {c.desc_categoria} </MenuItem>)
                         })
                    }
                     </SubMenu>)
                        
  
                     })
                 }
                    </SubMenu>
                    )
              })
      )
    } catch (error) {
    console.log('error trycatch', error) 
    }


}

const getMenu = () => {

    return (
      <Menu    mode="inline">
      {funSubMenu()}
    </Menu>
    
    );
  }

  const getGaleria = () => {

    if(isLoading){
     return( <LinearProgress /> ) 
    }
    else{ return(<GaleriaImages  id_sala = {keySala} imagenes= {ImagesDatas}/>)  }

  }


    return (
    <div className="container">
      <div className="flexDirection"> 
      <div className="menu">
        {getMenu()}

    </div>
        <div className="galeria">

        {getGaleria()}
        {keyCategoria}
        {keySala}
        </div>
    
      </div>
    <div>
    </div>
    </div>
    )
    
    

}


const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    ...state.fotoReducer,
    data:state.fotoReducer.data,
    isLoading:state.fotoReducer.isLoading
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
function mapDispatchToProps(dispatch) {
  const combiner = Object.assign({}, ActionCreators);
  return bindActionCreators(combiner, dispatch);
}

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);