import React from 'react';
import { useLocation } from 'react-router-dom';

function DetailProduct() {
    const location = useLocation();
    const product = location.state?.product;

    if (!product) {
        return <p>Product not found!</p>;
    }

    return (
        <div className="flex flex-col md:flex-row flex-nowrap">

            {/* Product Image Section */}
            <div className="order-1 md:order-2 flex justify-center items-center basis-1/2">
                <div className="w-1/2 overflow-y-scroll max-h-96">
                    <img className="w-full mb-4" src={product.defaultImage} alt={product.name} />
                    <img className="w-full" src={product.hoverImage} alt={product.name} />
                </div>
            </div>

            {/* Product Name and Price Section */}
            <div className="order-2 md:order-3  basis-1/4 md:py-20 md:pr-32">
                <div className="flex flex-col justify-center items-center  ">
                    <div>
                        <h1 className="text-2xm font-bold ">{product.name}</h1>
                        <p className="text-xm">{product.price}</p>
                    </div>
                </div>
            </div>

            {/* Product Description Section */}
            <div className="order-3 md:order-1 flex justify-center items-center basis-1/4 px-10">
                <div>
                    <h1>THÔNG TIN</h1>
                    <p className="text-gray-600 text-xs py-2" dangerouslySetInnerHTML={{ __html: product.desription }} />
                </div>
            </div>

        </div>
    );
}

export default DetailProduct;
