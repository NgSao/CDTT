import React from 'react'
import ProductItem from './ProductItem'

function ProductFilter() {
    return (
        <div className='p-4'>
            <div className='flex flex-row justify-center'>
                <div className='flex flex-col items-center mx-14 cursor-pointer relative group'>
                    <div className='w-20 h-20 bg-white overflow-hidden p-2  border-2 rounded-full hover:bg-red-700'>
                        <img className='transition-all group-hover:scale-125 group-hover:duration-700 ease-in-out' src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' />
                    </div>
                    <div className='mt-2 text-base font-medium hover:text-red-700'>iPhone 14</div>
                </div>
                <div className='flex flex-col items-center mx-14 cursor-pointer relative group'>
                    <div className='w-20 h-20 bg-white overflow-hidden p-2  border-2 rounded-full hover:bg-red-700'>
                        <img className='transition-all group-hover:scale-125 group-hover:duration-700 ease-in-out' src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' />
                    </div>
                    <div className='mt-2 text-base font-medium hover:text-red-700'>iPhone 14</div>
                </div>
                <div className='flex flex-col items-center mx-14 cursor-pointer relative group'>
                    <div className='w-20 h-20 bg-white overflow-hidden p-2  border-2 rounded-full hover:bg-red-700'>
                        <img className='transition-all group-hover:scale-125 group-hover:duration-700 ease-in-out' src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' />
                    </div>
                    <div className='mt-2 text-base font-medium hover:text-red-700'>iPhone 14</div>
                </div>
                <div className='flex flex-col items-center mx-14 cursor-pointer relative group'>
                    <div className='w-20 h-20 bg-white overflow-hidden p-2  border-2 rounded-full hover:bg-red-700'>
                        <img className='transition-all group-hover:scale-125 group-hover:duration-700 ease-in-out' src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' />
                    </div>
                    <div className='mt-2 text-base font-medium hover:text-red-700'>iPhone 14</div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='flex flex-row justify-between items-center mb-4 bg-red-700 p-2 rounded-md'>
                    <div className='text-base font-bold text-white cursor-pointer'>
                        iPhone
                    </div>
                    <div className="flex flex-row  cursor-pointer">
                        <div className='text-base text-white'>
                            Tất cả sản phẩm
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
                            <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </div>

                </div>
                <ProductItem />
            </div>

        </div>
    )
}

export default ProductFilter
// import React, { useState, useEffect } from 'react';
// import ProductItem from './ProductItem';

// function ProductFilter() {
//     // State for filtering and sorting
//     const [category, setCategory] = useState('all');
//     const [brand, setBrand] = useState('all');
//     const [priceRange, setPriceRange] = useState([0, 1000]);
//     const [viewMode, setViewMode] = useState('grid');
//     const [sortOrder, setSortOrder] = useState('newest');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [products, setProducts] = useState([]);

//     useEffect(() => {

//     }, [category, brand, priceRange, sortOrder, currentPage]);

//     return (
//         <div className='p-4'>
//             <div className='flex justify-between mb-6'>
//                 <div className='flex flex-row space-x-4'>
//                     <select className='border p-2 rounded' onChange={(e) => setCategory(e.target.value)}>
//                         <option value='all'>Tất cả danh mục</option>
//                         <option value='iphone'>iPhone</option>
//                         <option value='samsung'>Samsung</option>
//                     </select>

//                     <select className='border p-2 rounded' onChange={(e) => setBrand(e.target.value)}>
//                         <option value='all'>Tất cả thương hiệu</option>
//                         <option value='apple'>Apple</option>
//                         <option value='samsung'>Samsung</option>
//                     </select>

//                     <div className='flex flex-row items-center'>
//                         <span className='mr-2'>Giá:</span>
//                         <input
//                             type='number'
//                             className='border p-2 w-20 mr-2 rounded'
//                             value={priceRange[0]}
//                             onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
//                         />
//                         <span>-</span>
//                         <input
//                             type='number'
//                             className='border p-2 w-20 ml-2 rounded'
//                             value={priceRange[1]}
//                             onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
//                         />
//                     </div>
//                 </div>

//                 <div className='flex flex-row space-x-4'>
//                     <select className='border p-2 rounded' onChange={(e) => setSortOrder(e.target.value)}>
//                         <option value='newest'>Mới nhất</option>
//                         <option value='highToLow'>Giá cao đến thấp</option>
//                         <option value='lowToHigh'>Giá thấp đến cao</option>
//                         <option value='bestSeller'>Bán chạy</option>
//                     </select>

//                     <div className='flex items-center space-x-2'>
//                         <button
//                             className={`p-2 border ${viewMode === 'grid' ? 'bg-red-700 text-white' : ''}`}
//                             onClick={() => setViewMode('grid')}
//                         >
//                             Lưới
//                         </button>
//                         <button
//                             className={`p-2 border ${viewMode === 'list' ? 'bg-red-700 text-white' : ''}`}
//                             onClick={() => setViewMode('list')}
//                         >
//                             Danh sách
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className={`grid ${viewMode === 'grid' ? 'grid-cols-4 gap-4' : 'flex flex-col'}`}>
//                 {products.map((product) => (
//                     <ProductItem key={product.id} product={product} viewMode={viewMode} />
//                 ))}
//             </div>

//             <div className='flex justify-center mt-8'>
//                 <button
//                     className='p-2 border rounded-l'
//                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 >
//                     Previous
//                 </button>
//                 <span className='p-2 border'>{currentPage}</span>
//                 <button
//                     className='p-2 border rounded-r'
//                     onClick={() => setCurrentPage((prev) => prev + 1)}
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default ProductFilter;
