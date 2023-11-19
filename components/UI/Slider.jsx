import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function SwiperSlider() {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"

            >
                <SwiperSlide><img src='https://picsum.photos/3000/800' /></SwiperSlide>
                <SwiperSlide><img src='https://picsum.photos/3000/800' /></SwiperSlide>
                <SwiperSlide><img src='https://picsum.photos/3000/800' /></SwiperSlide>
                <SwiperSlide><img src='https://picsum.photos/3000/800' /></SwiperSlide>
                <SwiperSlide><img src='https://picsum.photos/3000/800' /></SwiperSlide>
                <SwiperSlide><img src='https://picsum.photos/3000/800' /></SwiperSlide>
                <SwiperSlide><img src='https://picsum.photos/3000/800' /></SwiperSlide>
            </Swiper>
        </>
    );
}
