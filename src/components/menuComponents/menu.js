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


const MenuComponent = ({getFoto,data}) => {
  const [keyCategoria, setkeyCategoria] = useState(0);
  const [keySala, setKeySala] = useState(0);
  const [imagenesSala,setImagenesSalas] = useState([])
  const [ImagesDatas,setImagenesData] = useState([])
 

  const onClick = (info) => {
    //console.log(info)
    setkeyCategoria(info.key)

  }

  const onTitleClick = (info) => {
    //console.log(info)
    setKeySala(info.key)
  }

  useEffect(async ()=>{
   await getFoto()
    console.log('KEYSALA: ',keySala )
    console.log('KEYCAT: ',keyCategoria )
    
    
    const salaFiltrada = await data.filter(js => 391 === js.id_sala)
    setImagenesSalas(salaFiltrada)
    console.log('SALA FILTRADA: ' ,salaFiltrada)

    imagenesSala.filter(funFiltraCategoria)

    //const salaCatFiltrada = await imagenesSala.data?.filter( js => 0 === js.id_categoria)
    //console.log('SALA CAT FILTRADA: ' ,ImagesDatas)
  }, [keySala ,keyCategoria])


  const funFiltraCategoria = (dataSala) => {
   const arrayImage = []

    dataSala.data.map(function (value) { console.log('DENTRO MAP')
      if(value.id_categoria === 0){
        console.log('DENTRO IF')
          console.log(value.fotos)
          arrayImage.push(value.fotos)
        }   


      });
   console.log('arrayImage' ,arrayImage)
   setImagenesData(arrayImage)
     // return (arrayImage)
  }
 
  const funSubMenu = () => {
    return(
      
            zonas.map((v) => {
                
           return (<SubMenu className='menu' key={v.id_zona} title={v.desc_zona}>
               {
                   v.salas.map((i)=>{
                  return(  <SubMenu  key={i.id_sala} title={i.desc_sala} onTitleClick={(info) => onTitleClick(info)} > 
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
        <GaleriaImages  id_sala = {keySala} imagenes= {ImagesDatas}/>
      
        {JSON.stringify(ImagesDatas)}
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
    data:state.fotoReducer.data
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
function mapDispatchToProps(dispatch) {
  const combiner = Object.assign({}, ActionCreators);
  return bindActionCreators(combiner, dispatch);
}

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);