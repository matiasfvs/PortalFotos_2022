import React, { useState,useEffect } from "react";
import {View,Text} from 'react-native-web';
import ReactDOM from 'react-dom';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import zonas from '../../data/zonas.json'
import GaleriaImages from '../galeriaComponents/GaleriaImages'
import 'rc-menu/assets/index.css';
import '../../stylesGallery.css'
const ImagesData = require('../../data/galeria.json')

const MenuComponent = () => {
  const [key, setKey] = useState(0);
  const [imagenesSala,setImagenesSalas] = useState([])

  const onClick = (info) => {
    //setImagenes(imagenes)
    //imagenes.pop()
    setKey(info.key)

  }

  useEffect(()=>{
    const salaFiltrada = ImagesData.filter(js=>key===js.id_sala)
    setImagenesSalas(salaFiltrada)
  }, [key])

  

  const funSubMenu = () => {

    return(
            zonas.map((v) => {
                
           return (<SubMenu className='menu' key={v.id_zona} title={v.desc_zona}>
               {
                   v.salas.map((i)=>{
                  return(  <MenuItem key={i.id_sala}> {i.desc_sala} </MenuItem>)
                   })
               }
                      
                  </SubMenu>
                  )
            })
    )
}

const getMenu = () => {

    return (
      <Menu
        onClick={(info) => onClick(info)}
        mode="inline"
      >
        {funSubMenu()}
      </Menu>
    );
  }


    return (
    <div className="container">
      <div className="flexDirection"> 
      <div className="menu">
        {getMenu()}
    </div>
        <div className="galeria">
        <GaleriaImages  id_sala = {key} imagenes= {imagenesSala}/>
        </div>
    
      </div>
    <div>
    </div>
    </div>
    )
    
    

}


export default MenuComponent;