import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../redux/actions";
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import {View} from 'react-native-web';
import React, { useState } from 'react';
import Menu_ from '../components/menuComponents/menu'
import GaleriaImages from '../components/galeriaComponents/GaleriaImages'

const HomeScreen =({data,zonas})=>{
 
  const ImagesDatas = data

        return (
          <View >
             <Menu_ dataJson={ImagesDatas} dataJsonZonas ={zonas}></Menu_>
             
          </View>
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