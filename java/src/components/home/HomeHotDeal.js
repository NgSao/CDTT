import React from 'react'
import ProductItemHot from './../product/ProductItemHot';

function HomeHotDeal() {
    return (
        <div className="container mx-auto my-5">
            <div className="flex flex-row">
                <div className="basis-3/12 p-5 pb-28 border-2 border-gray-100">
                    <div className="text-2xl font-medium">Tri ân vàng</div>
                    <div className="text-xl">Nồng nàn yêu thương</div>
                    <div className="mt-5 flex flex-row">
                        <div className="bg-red-600 rounded-md p-3 flex flex-col items-center mr-4 w-16 overflow-hidden">
                            <div className="text-lg font-bold text-red-50">04</div>
                            <div className="text-base  text-red-50" >Ngày</div>
                        </div>
                        <div className="bg-red-600 rounded-md p-3 flex flex-col items-center mr-4 w-16 overflow-hidden">
                            <div className="text-lg font-bold text-red-50">04</div>
                            <div className="text-base  text-red-50" >Giờ</div>
                        </div>
                        <div className="bg-red-600 rounded-md p-3 flex flex-col items-center mr-4 w-16 overflow-hidden">
                            <div className="text-lg font-bold text-red-50">04</div>
                            <div className="text-base  text-red-50" >Phút</div>
                        </div>
                        <div className="bg-red-600 rounded-md p-3 flex flex-col items-center mr-4 w-16 overflow-hidden">
                            <div className="text-lg font-bold text-red-50">04</div>
                            <div className="text-base  text-red-50" >Giây</div>
                        </div>
                    </div>
                </div>

                <div className="basis-9/12 pb-2 border-gray-100">
                    <ProductItemHot />
                </div>
            </div>
        </div>
    )
}

export default HomeHotDeal
