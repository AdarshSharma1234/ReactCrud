import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
    return (
        <Carousel autoPlay interval={6000} infiniteLoop>
            <div>
                <img src="/image/carousel/download1.jpg" alt="Slide 1" />
                <p className="legend">Slide 1</p>
            </div>
            <div>
                <img src="/image/carousel/download2.jpg" alt="Slide 2" />
                <p className="legend">Slide 2</p>
            </div>
            <div>
                <img src="/image/carousel/images4.jpg" alt="Slide 3" />
                <p className="legend">Slide 3</p>
            </div>
        </Carousel>
    );


    
};

export default MyCarousel;