import React from 'react'
import ProductItem from './../product/ProductItem';

function CategoryProduct() {
    return (
        <div className='p-4'>
            <div className='flex flex-row justify-center'>
                <div className='flex flex-col items-center mx-14 cursor-pointer relative group'>
                    <div className='w-20 h-20 bg-white overflow-hidden p-2 rounded-full hover:bg-red-700'>
                        <img className='transition-all group-hover:scale-125 group-hover:duration-700 ease-in-out' src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' />
                    </div>
                    <div className='mt-2 text-base font-medium hover:text-red-700'>iPhone 14</div>
                </div>
                <div className='flex flex-col items-center mx-14 cursor-pointer relative group'>
                    <div className='w-20 h-20 bg-white overflow-hidden p-2 rounded-full hover:bg-red-700'>
                        <img className='transition-all group-hover:scale-125 group-hover:duration-700 ease-in-out' src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' />
                    </div>
                    <div className='mt-2 text-base font-medium hover:text-red-700'>iPhone 14</div>
                </div>
                <div className='flex flex-col items-center mx-14 cursor-pointer relative group'>
                    <div className='w-20 h-20 bg-white overflow-hidden p-2 rounded-full hover:bg-red-700'>
                        <img className='transition-all group-hover:scale-125 group-hover:duration-700 ease-in-out' src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' />
                    </div>
                    <div className='mt-2 text-base font-medium hover:text-red-700'>iPhone 14</div>
                </div>
                <div className='flex flex-col items-center mx-14 cursor-pointer relative group'>
                    <div className='w-20 h-20 bg-white overflow-hidden p-2 rounded-full hover:bg-red-700'>
                        <img className='transition-all group-hover:scale-125 group-hover:duration-700 ease-in-out' src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' />
                    </div>
                    <div className='mt-2 text-base font-medium hover:text-red-700'>iPhone 14</div>
                </div>
            </div>
            <div className='mt-10'>
                <ProductItem />
            </div>
            <div className=' flex flex-col items-center mt-12 cursor-pointer'>
                <div className='flex flex-row items-center p-3 bg-white text-red-700 font-medium rounded-lg border-2 border-red-700 hover:bg-red-700 hover:text-white'>
                    Xem toàn bộ sản phẩm
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default CategoryProduct