import React from 'react';
import HomeSlider from './Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpWideShort, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Homepage = () => {
    return(
        <div>
            <HomeSlider />
            <div className='pt-[20px]'>
                <div className='flex flex-row'>
                    <div className='flex'>
                        <FontAwesomeIcon icon={faArrowUpWideShort} style={{color:"#ebaf2d", height:"40px",}}/>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            <p>Wide Range of Quality Products</p>
                        </div>
                        <div className='mt-[-10px]'>
                            <p>Offering a comprehensive selection of premium puja kits, samagri, and spiritual items to meet all your ritual needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;