import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
import '../../stylesGallery.css'
import Menu_ from '../menuComponents/menu'

const ImagesData = require('../../data/galeria.json')

let images = new Array()


const GaleriaImages = (id_sala) => {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    ImagesData.forEach(js=>{
  
      if(id_sala.id_sala === js.id_sala){
        console.log('Dentro del if')
        js.foto.forEach(value=>{
          images.push(value)
      })
      }
    });

    //console.log('arreglo json',images)
    //console.log('arreglo manual',images)

    const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);
  
    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };

    return(
<div className='container'>
    <div className="banner"><text>AQUI VA EL BANNER</text></div>

    <div className="flexDirection">

            <div className='menu'><Menu_></Menu_></div>

            <div className='galeria'>
            {images.map((src, index) => (
                <img
                src={src}
                onClick={() => openImageViewer(index)}
                width="300"
                key={index}
                className='imagen'
                alt=""
                />
            ))}

            {isViewerOpen && (
                <ImageViewer
                src={images}
                currentIndex={currentImage}
                onClose={closeImageViewer}
                disableScroll={false}
                backgroundStyle={{
                    backgroundColor: "rgba(0,0,0,0.9)"
                }}
                closeOnClickOutside={true}
                />
            )}
            </div>
    </div>
    </div>
  )
    }

export default GaleriaImages