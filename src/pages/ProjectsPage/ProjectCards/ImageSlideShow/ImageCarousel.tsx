// ImageCarousel.js
import React, { useState } from 'react';
import {getAsset} from '../../../../utils/GetAssets';
import './ImageCarouselStyle.css';

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <>
            <div className="carousel-container" onClick={nextImage}>
                <div className='imageFrame'>
                    <img className='projectImage'   src={getAsset(images[currentIndex]) ?? ''} alt={`Image ${currentIndex}`} />
                </div>
            </div>
            <p className='imageCount'>{currentIndex + 1} / {images.length}</p>
        </>
        
    );
};

export default ImageCarousel;
