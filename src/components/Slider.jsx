import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const images = [
  { url: '/carouselImage1.jpg', alt: 'Invoke Blessings with the Finest Puja Samagri', desc:'Shop premium puja kits and essentials for every prayer ritual' },
  { url: '/carouselImage2.jpg', alt: 'Every Prayer Matters, Embrace Your Spiritual Journey', desc:'Everything you need for a complete and peaceful puja experience'},
  { url: '/carouselImage3.jpg', alt: 'Sacred Offerings for Every Festival and Prayer', desc: 'Explore our divine collection of puja products' },
];

const HomeSlider = () => {
  const buttonTexts = {
    0: 'Shop Now',
    1: 'Puja Ingredients',
    2: 'Explore Products',
  };
  return (
    <div className='h-[90vh]'>
      <Carousel fade={2000} className='h-[85vh]'>
        {images.map((image, index) => (
          <Carousel.Item key={index} interval={2000}>
            <img
              className="d-block w-[100%] h-[91vh] object-cover"
              src={image.url}
              alt={image.alt}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
            
            {/* Text container, positioned on the top-left */}
            <div className="absolute top-[80px] left-[150px] p-6 md:p-12 text-white">
              <h3 className="font-thin font-montserrat text-[60px] w-[600px]">{image.alt}</h3>
              <p className="pt-[25px] text-lg md:text-xl font-thin">{image.desc}</p>
              {buttonTexts[index] && (
                <button className='border-white border-[1px] p-[15px] rounded-[40px] mt-[10px]'>
                  {buttonTexts[index]}
                </button>
              )}
            </div>
            {/* FontAwesome icon positioned at the bottom center */}
            <div className='absolute bottom-[0.5rem] left-1/2 transform -translate-x-1/2'>
              <FontAwesomeIcon icon={faAnglesDown} beatFade style={{ color: "#fcfcfc", fontSize: "2rem" }} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeSlider;