import React, { useState, useEffect } from 'react';

function HeaderSlider() {
    const images = [
        'https://minhtuanmobile.com/uploads/slide/dai-ly-uy-quyen-240224031431.webp',
        'https://minhtuanmobile.com/uploads/slide/s24-240224031445.webp',
        'https://minhtuanmobile.com/uploads/slide/s24-240224031450.webp'
    ];

    const [imageOrder, setImageOrder] = useState([0, 1, 2]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageOrder((prevOrder) => {
                const newOrder = [...prevOrder];
                const first = newOrder.shift();
                newOrder.push(first);
                return newOrder;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container mx-auto flex flex-row justify-center items-center m-1 space-x-4">
            {imageOrder.map((index) => (
                <div key={index} className="w-80 h-11">
                    <img
                        src={images[index]}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                    />
                </div>
            ))}
        </div>
    );
}

export default HeaderSlider;
