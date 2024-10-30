import React, { useState, useEffect } from 'react';

function BannerItem() {
    const images = [
        'https://minhtuanmobile.com/uploads/slide/combo-phu-kien-t10-241001012014.png',
        'https://minhtuanmobile.com/uploads/slide/combo-phu-kien-t10-241001012014.png',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                return (prevIndex + 1) % images.length;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className=" flex justify-center w-full md:w-full lg:w-full sm:w-full mb-4">
            <img
                src={images[currentImageIndex]}
                alt={`Banner ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
        </div>
    );
}

export default BannerItem;
