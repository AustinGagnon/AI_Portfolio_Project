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
                {images.map((image: string, index: number) => (
                    <div
                        key={index}
                        className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img height={400} src={getAsset(image) ?? ''} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
            {images.length > 1 ? <p className='clickToScroll'>Click to Scroll</p> : null}
        </>
        
    );
};

export default ImageCarousel;
