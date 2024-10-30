

import React from 'react'
import { Link } from 'react-router-dom'

function CategoryItem() {
    return (
        <div className="bg-red-700 p-1">
            <div className="container mx-auto flex flex-row items-center">
                <ul className="flex flex-row py-2 cursor-pointer">
                    <li className="flex flex-row items-center relative mr-14 hover:duration-300 group">
                        <img src="https://minhtuanmobile.com/uploads/items/iphone-231208103814.png" className="w-7 h-auto" />
                        <Link to='/products'>
                            <div className="text-base ml-1 text-white">iPhone</div>
                        </Link>
                        <div className="absolute top-10 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:max-h-[700px] opacity-0 group-hover:opacity-100 px-8 pb-0 pt-0 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Dòng máy</h6>
                                <ul className="mt-2 pt-2 space-y-3">
                                    <li className="max-lg:border-b relative hover:duration-300 group">
                                        <a className=" hover:text-red-700 text-sm" >
                                            Ihpone 15
                                        </a>
                                        {/* <div className="absolute -right-3 top-1 z-40 hidden  group-hover:block overflow-hidden">
                                            <ul className="space-y-2">
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro Max
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}

                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 14
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 13
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 12
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Mức giá iPhone</h6>
                                <ul className="mt-2 pt-2 space-y-3">

                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Dưới 10 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Từ 10 đến 20 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Trên 30 triệu
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </li>

                    <li className="flex flex-row items-center relative mr-14 hover:duration-300 group">
                        <img src="https://minhtuanmobile.com/uploads/items/iphone-231208103814.png" className="w-7 h-auto" />
                        <div className="text-base ml-1 text-white">iPhone</div>
                        <div className="absolute top-10 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:max-h-[700px] opacity-0 group-hover:opacity-100 px-8 pb-0 pt-0 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Dòng máy</h6>
                                <ul className="mt-2 pt-2 space-y-3">
                                    <li className="max-lg:border-b relative hover:duration-300 group">
                                        <a className=" hover:text-red-700 text-sm" >
                                            Ihpone 15
                                        </a>
                                        {/* <div className="absolute -right-3 top-1 z-40 hidden  group-hover:block overflow-hidden">
                                            <ul className="space-y-2">
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro Max
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}

                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 14
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 13
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 12
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Mức giá iPhone</h6>
                                <ul className="mt-2 pt-2 space-y-3">

                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Dưới 10 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Từ 10 đến 20 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Trên 30 triệu
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </li>

                    <li className="flex flex-row items-center relative mr-14 hover:duration-300 group">
                        <img src="https://minhtuanmobile.com/uploads/items/iphone-231208103814.png" className="w-7 h-auto" />
                        <div className="text-base ml-1 text-white">iPhone</div>
                        <div className="absolute top-10 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:max-h-[700px] opacity-0 group-hover:opacity-100 px-8 pb-0 pt-0 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Dòng máy</h6>
                                <ul className="mt-2 pt-2 space-y-3">
                                    <li className="max-lg:border-b relative hover:duration-300 group">
                                        <a className=" hover:text-red-700 text-sm" >
                                            Ihpone 15
                                        </a>
                                        {/* <div className="absolute -right-3 top-1 z-40 hidden  group-hover:block overflow-hidden">
                                            <ul className="space-y-2">
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro Max
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}

                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 14
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 13
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 12
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Mức giá iPhone</h6>
                                <ul className="mt-2 pt-2 space-y-3">

                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Dưới 10 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Từ 10 đến 20 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Trên 30 triệu
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </li>

                    <li className="flex flex-row items-center relative mr-14 hover:duration-300 group">
                        <img src="https://minhtuanmobile.com/uploads/items/iphone-231208103814.png" className="w-7 h-auto" />
                        <div className="text-base ml-1 text-white">iPhone</div>
                        <div className="absolute top-10 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:max-h-[700px] opacity-0 group-hover:opacity-100 px-8 pb-0 pt-0 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Dòng máy</h6>
                                <ul className="mt-2 pt-2 space-y-3">
                                    <li className="max-lg:border-b relative hover:duration-300 group">
                                        <a className=" hover:text-red-700 text-sm" >
                                            Ihpone 15
                                        </a>
                                        {/* <div className="absolute -right-3 top-1 z-40 hidden  group-hover:block overflow-hidden">
                                            <ul className="space-y-2">
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro Max
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}

                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 14
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 13
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 12
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Mức giá iPhone</h6>
                                <ul className="mt-2 pt-2 space-y-3">

                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Dưới 10 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Từ 10 đến 20 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Trên 30 triệu
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </li>

                    <li className="flex flex-row items-center relative mr-14 hover:duration-300 group">
                        <img src="https://minhtuanmobile.com/uploads/items/iphone-231208103814.png" className="w-7 h-auto" />
                        <div className="text-base ml-1 text-white">iPhone</div>
                        <div className="absolute top-10 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:max-h-[700px] opacity-0 group-hover:opacity-100 px-8 pb-0 pt-0 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Dòng máy</h6>
                                <ul className="mt-2 pt-2 space-y-3">
                                    <li className="max-lg:border-b relative hover:duration-300 group">
                                        <a className=" hover:text-red-700 text-sm" >
                                            Ihpone 15
                                        </a>
                                        {/* <div className="absolute -right-3 top-1 z-40 hidden  group-hover:block overflow-hidden">
                                            <ul className="space-y-2">
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro Max
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}

                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 14
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 13
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 12
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Mức giá iPhone</h6>
                                <ul className="mt-2 pt-2 space-y-3">

                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Dưới 10 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Từ 10 đến 20 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Trên 30 triệu
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </li>

                    <li className="flex flex-row items-center relative mr-14 hover:duration-300 group">
                        <img src="https://minhtuanmobile.com/uploads/items/iphone-231208103814.png" className="w-7 h-auto" />
                        <div className="text-base ml-1 text-white">iPhone</div>
                        <div className="absolute top-10 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:max-h-[700px] opacity-0 group-hover:opacity-100 px-8 pb-0 pt-0 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Dòng máy</h6>
                                <ul className="mt-2 pt-2 space-y-3">
                                    <li className="max-lg:border-b relative hover:duration-300 group">
                                        <a className=" hover:text-red-700 text-sm" >
                                            Ihpone 15
                                        </a>
                                        {/* <div className="absolute -right-3 top-1 z-40 hidden  group-hover:block overflow-hidden">
                                            <ul className="space-y-2">
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro Max
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}

                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 14
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 13
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 12
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Mức giá iPhone</h6>
                                <ul className="mt-2 pt-2 space-y-3">

                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Dưới 10 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Từ 10 đến 20 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Trên 30 triệu
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </li>

                    <li className="flex flex-row items-center relative mr-14 hover:duration-300 group">
                        <img src="https://minhtuanmobile.com/uploads/items/iphone-231208103814.png" className="w-7 h-auto" />
                        <div className="text-base ml-1 text-white">iPhone</div>
                        <div className="absolute top-10 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:max-h-[700px] opacity-0 group-hover:opacity-100 px-8 pb-0 pt-0 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Dòng máy</h6>
                                <ul className="mt-2 pt-2 space-y-3">
                                    <li className="max-lg:border-b relative hover:duration-300 group">
                                        <a className=" hover:text-red-700 text-sm" >
                                            Ihpone 15
                                        </a>
                                        {/* <div className="absolute -right-3 top-1 z-40 hidden  group-hover:block overflow-hidden">
                                            <ul className="space-y-2">
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro Max
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}

                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 14
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 13
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 12
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Mức giá iPhone</h6>
                                <ul className="mt-2 pt-2 space-y-3">

                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Dưới 10 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Từ 10 đến 20 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Trên 30 triệu
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </li>

                    <li className="flex flex-row items-center relative mr-14 hover:duration-300 group">
                        <img src="https://minhtuanmobile.com/uploads/items/iphone-231208103814.png" className="w-7 h-auto" />
                        <Link to='/blogs'>
                            <div className="text-base ml-1 text-white">Blog</div>
                        </Link>
                        <div className="absolute top-10 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:max-h-[700px] opacity-0 group-hover:opacity-100 px-8 pb-0 pt-0 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Dòng máy</h6>
                                <ul className="mt-2 pt-2 space-y-3">
                                    <li className="max-lg:border-b relative hover:duration-300 group">
                                        <a className=" hover:text-red-700 text-sm" >
                                            Ihpone 15
                                        </a>
                                        {/* <div className="absolute -right-3 top-1 z-40 hidden  group-hover:block overflow-hidden">
                                            <ul className="space-y-2">
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-sm hover:text-red-700 block">
                                                        Iphone 15 Pro Max
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}

                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 14
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 13
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Ihpone 12
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                <h6 className="text-lg font-bold">Mức giá iPhone</h6>
                                <ul className="mt-2 pt-2 space-y-3">

                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Dưới 10 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Từ 10 đến 20 triệu
                                        </a>
                                    </li>
                                    <li className="max-lg:border-b rounded">
                                        <a className=" hover:text-red-700  text-sm block" >
                                            Trên 30 triệu
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </li>
                </ul>


            </div>

        </div>

    )
}

export default CategoryItem
