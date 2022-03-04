import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import zonas from '../../data/zonas.json'
import 'rc-menu/assets/index.css';
import '../../stylesGallery.css'

class HomeScreen extends Component {
  onClick(info) {
    console.log('click ', info);
  }

  funTest(){
      console.log('FUN TEST')
  }

funSubMenu(){

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

  getMenu() {

    //console.log(zonas)

    
    return (
      <Menu className='menu'
        onClick={this.onClick}
        mode="inline"
      >
        {this.funSubMenu()}
      </Menu>
    );
  }

  render() {
    return (<div>
      <div>{this.getMenu()}</div>
    </div>);
  }
}


export default HomeScreen;