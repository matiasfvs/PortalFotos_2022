import React, { useState } from "react";
import {View,Text} from 'react-native-web';
import ReactDOM from 'react-dom';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import zonas from '../../data/zonas.json'
import GaleriaImages from '../galeriaComponents/GaleriaImages'
import 'rc-menu/assets/index.css';
import '../../stylesGallery.css'

const MenuComponent = () => {
  const [key, setKey] = useState();

  const onClick = (info) => {
    //console.log('Key seleccionada: ', info.key);
    setKey(info.key)
    //console.log('Key del Onclick' ,key)
  }

    
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


    return (<div>
      <div style={{ width: 400 }}>
        {getMenu()}
        </div>
    <GaleriaImages 
    id_sala = {key}
    />
    </div>);

}


export default MenuComponent;