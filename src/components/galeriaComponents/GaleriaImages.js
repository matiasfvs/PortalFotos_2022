import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
import '../../stylesGallery.css'
import Menu_ from '../menuComponents/menu'

const ImagesData = require('../../data/galeria.json')

let images = new Array()

ImagesData.forEach(js=>{
    js.foto.forEach(value=>{
        images.push(value)
    })
});

const GaleriaImages = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    console.log('arreglo json',images)

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