import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../../redux/actions";
import React, { useState,useEffect } from "react";
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import zonas from '../../data/zonas.json'
import GaleriaImages from '../galeriaComponents/GaleriaImages'
import 'rc-menu/assets/index.css';
import '../../styles.css'
const ImagesData = require('../../data/galeria.json')



const MenuComponent = ({getFoto}) => {
  const [key, setKey] = useState(0);
  const [imagenesSala,setImagenesSalas] = useState([])
  const [ImagesDatas,setImagenesData] = useState([])
 

  const onClick = (info) => {
    console.log(info)
    setKey(info.key)

  }

  useEffect(()=>{
    setImagenesData(getFoto())
    const salaFiltrada = ImagesDatas.filter(js=>key===js.id_categoria )
    setImagenesSalas(salaFiltrada)
  }, [key])

  //console.log('get foto',ImagesDatas)

  const funSubMenu = () => {

    return(
            zonas.map((v) => {
                
           return (<SubMenu className='menu' key={v.id_zona} title={v.desc_zona}>
               {
                   v.salas.map((i)=>{
                  return(  <SubMenu  key={i.id_sala} title={i.desc_sala}> 
                  {
                     i.categorias.map((c)=>{
                      return(  <MenuItem  key={c.id_categoria}> {c.desc_categoria} </MenuItem>)
                       })
                  }
                   </SubMenu>)
                      

                   })
               }
                  </SubMenu>
                  )
            })
    )
}

const getMenu = () => {

    return (
      <Menu    mode="inline"
      onClick={(info) => onClick(info)}>

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


const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    ...state.fotoReducer,
    dataFoto:state.dataFoto
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
function mapDispatchToProps(dispatch) {
  const combiner = Object.assign({}, ActionCreators);
  return bindActionCreators(combiner, dispatch);
}

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);