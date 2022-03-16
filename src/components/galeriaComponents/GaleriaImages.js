import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
import '../../stylesGallery.css'

const GaleriaImages = ({imagenes}) => {

    console.log('imagenes', imagenes)

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);    


    const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);
  
    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };

    return(

             <div>
      {imagenes[0]?.foto?.map((src, index) => (
        <img
        src={src}
        onClick={() => openImageViewer(index)}
        width="300"
        key={index}
        className='imagen'
        alt=""
        />))}

             {isViewerOpen && (
                <ImageViewer
                src={imagenes[0].foto}
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
  )
    }

export default GaleriaImages