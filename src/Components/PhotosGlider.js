import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
    Autoplay,Pagination,Navigation
} from 'swiper/core';

import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../Assets/css/slider.css";

import Apartment1 from "../Assets/Images/apartment1.jpg";
import Apartment2 from "../Assets/Images/Apartment2.jpg";

SwiperCore.use([Autoplay,Pagination,Navigation]);

const images =[
    {
        pic:Apartment1
    },
    {
        pic:Apartment2
    }
]

const SliderComponent =() =>{

    return(
        <>
            <Swiper spaceBetween={0} centeredSlides={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                {images.map((item,index)=>(
                    <SwiperSlide key={index}>
                        <img src={item.pic}alt="slides"/>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )

}
export default SliderComponent;