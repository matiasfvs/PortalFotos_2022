import {View} from 'react-native-web';
import React, { Component } from 'react';
import Menu_ from './../components/menuComponents/menu.js'
import GaleriaImages from '../components/galeriaComponents/GaleriaImages'

class HomeScreen extends Component {

    render() {
        return (
    
    
    
          <View >
             <Menu_></Menu_>
             <GaleriaImages/>
          </View>
        );
      }

}


export default (HomeScreen);