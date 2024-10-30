import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Thay đổi thời gian tự động chạy
    };

    // Dữ liệu cứng cho hình ảnh
    const imageData = [
        'https://theme.hstatic.net/1000306633/1001194548/14/slideshow_2.jpg?v=225',
        'https://theme.hstatic.net/1000306633/1001194548/14/slideshow_3.jpg?v=225',
        'https://theme.hstatic.net/1000306633/1001194548/14/show_block_home_category_image_3_new.png?v=225'
    ];



    return (
        <div className="w-full h-full ">
            <Slider {...settings}>
                {imageData.map((image, index) => (
                    <div key={index} className="relative h-full">
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover "
                        />
                    </div>
                ))}
            </Slider>


        </div>
    );
};

export default Banner;
