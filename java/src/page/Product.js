import React from 'react'
import ProductFilter from './../components/product/ProductFilter';

function Product() {
    return (
        <div>
            <div className='bg-gray-200 border-b-2 border-gray-300'>
                <div className='container mx-auto p-3 '>
                    <span>Trang chủ / </span>
                    <span>iPhone</span>
                </div>
            </div>
            <div className='container mx-auto mt-4'>
                <ProductFilter />
            </div>
        </div>
    )
}

export default Product