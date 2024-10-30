import React from 'react'
import ProductItem from '../product/ProductItem'

function HomeProductCategory() {
    return (
        <div className='mt-10 mb-10 pb-10 bg-gray-200 rounded-lg'>
            <img src='https://minhtuanmobile.com/uploads/slide/1380x100_(1)2.png' className='w-full rounded-lg' />
            <div className="p-3 cursor-pointer flex flex-row">
                <div className='bg-red-700 p-2 mr-5 rounded-lg'>
                    <div className='text-lg font-bold text-white text-center'>Tất cả sản phẩm</div>

                </div>
                <div className="group">
                    <div className="bg-white p-2 mr-5 rounded-lg group-hover:bg-red-700">
                        <div className="text-lg font-bold text-red-700 text-center group-hover:text-white">
                            Điện thoại
                        </div>
                    </div>
                </div>
                <div className="group">
                    <div className="bg-white p-2 mr-5 rounded-lg group-hover:bg-red-700">
                        <div className="text-lg font-bold text-red-700 text-center group-hover:text-white">
                            Phụ Kiện
                        </div>
                    </div>
                </div>
            </div>
            <div className=' p-4'>
                <ProductItem />

            </div>

        </div>
    )
}

export default HomeProductCategory