import React from 'react'
function ProductColor() {
    return (
        <div className='grid grid-cols-2 gap-4 mb-5'>
            <div className='border-2 border-red-700 rounded-md cursor-pointer p-1 px-4 flex flex-row items-center mr-5 relative overflow-hidden'>
                <div className='bg-red-700 absolute left-0 top-0 p-1 rounded-br-3xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
                <div className='w-10 overflow-hidden'>
                    <img src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' />
                </div>
                <div className='ml-2'>
                    <div className='text-base font-medium text-red-700'>Yellow</div>
                    <span className='text-base text-red-700'>19,090,000đ</span>
                </div>
            </div>
            <div className=' border-2 border-gray-300 rounded-md cursor-pointer p-1 px-4 flex flex-row items-center mr-5 relative overflow-hidden hover:border-red-700'>
                <div className='w-10 overflow-hidden'>
                    <img src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' />
                </div>
                <div className='ml-2'>
                    <div className='text-base font-medium'>Yellow</div>
                    <span className='text-base'>19,090,000đ</span>
                </div>
            </div>
            <div className=' border-2 border-gray-300 rounded-md cursor-pointer p-1 px-4 flex flex-row items-center mr-5 relative overflow-hidden hover:border-red-700'>
                <div className='w-10 overflow-hidden'>
                    <img src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' />
                </div>
                <div className='ml-2'>
                    <div className='text-base font-medium'>Yellow</div>
                    <span className='text-base'>19,090,000đ</span>
                </div>
            </div>
            <div className=' border-2 border-gray-300 rounded-md cursor-pointer p-1 px-4 flex flex-row items-center mr-5 relative overflow-hidden hover:border-red-700'>
                <div className='w-10 overflow-hidden'>
                    <img src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' />
                </div>
                <div className='ml-2'>
                    <div className='text-base font-medium'>Yellow</div>
                    <span className='text-base'>19,090,000đ</span>
                </div>
            </div>



        </div>
    )
}

export default ProductColor