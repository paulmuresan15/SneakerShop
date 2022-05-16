import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../../Styles/styles.css";
import picture1 from "./SlideShow/Images/slideshow_1.jpg";
import picture2 from "./SlideShow/Images/slideshow_2.jpg";
import picture3 from "./SlideShow/Images/slideshow_3.jpg";
import picture4 from "./SlideShow/Images/slideshow_4.jpg";
import picture5 from "./SlideShow/Images/slideshow_5.jpg";
import Carousel from "nuka-carousel";

const slideImages = [
    {
        url: picture1,
        caption: 'Slide 1'
    },
    {
        url: picture2,
        caption: 'Slide 2'
    },
    {
        url: picture3,
        caption: 'Slide 3'
    },
    {
        url: picture4,
        caption: 'Slide 3'
    },
    {
        url: picture5,
        caption: 'Slide 3'
    },

];
const Slideshow = () => {
    // @ts-ignore
    return (
        <Carousel defaultControlsConfig={
            {
                nextButtonText : ' ' ,
                prevButtonText : ' ',
                nextButtonStyle : {
                    display : 'none'
                },
                prevButtonStyle : {
                    display : 'none'
                }
            }
        } wrapAround={true} adaptiveHeight={true} autoplay={true} autoplayInterval={5000} className="slideshow-container" >
            {slideImages.map((slideImage, index) => (
                <img  key={index} className="carousel" alt={index.toString()} src={slideImage.url}/>))}
        </Carousel>)
}
export default Slideshow;

