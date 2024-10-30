import React from 'react'
import { Link } from 'react-router-dom';
import NewArrivals from './NewArrivals';
import ProductSale from './ProductSale';
import ProductNew from './ProductNew';
import { ProductSaleService } from '../Api';
import ProductBestSeal from './ProductBestSeal';

function ProductHome() {
    const products = [
        {
            id: 1,
            name: 'HADES STRIPED SOLID SHIRT',
            price: '$480.000',
            desription: "Áo sơ mi tay ngắn unisex <br/> Graphic và typo in kéo lụa full bản ở mặt trước áo <br/> Chi tiết hoa được thêu trên toàn bộ thân áo<br/> Logo HADES thêu ở tay áo<br/> Chất liệu: Cotton <br/>Lưu ý: Màu sắc sản phẩm có thể khác trên ảnh do điều kiện ánh sáng khi chụp Vận chuyển từ 2-3 ngày. <br/>Thiết kế và sản xuất bởi HADES",
            defaultImage: 'https://product.hstatic.net/1000306633/product/hades0061__2__f4fdfa3c86cb46ac9d94b7de2eb50ae5.jpg',
            hoverImage: 'https://product.hstatic.net/1000306633/product/hades0072_638e374330534a9ba1d4bf33d8b6599f.jpg',
        },
        {
            id: 2,
            name: 'HADES LOVELESS STRIPED SHIRT',
            price: '$520,000',
            desription: "Áo sơ mi tay ngắn unisex Graphic và typo in kéo lụa full bản ở mặt trước áo Chi tiết hoa được thêu trên toàn bộ thân áo Logo HADES thêu ở tay áo Chất liệu: Cotton Lưu ý: Màu sắc sản phẩm có thể khác trên ảnh do điều kiện ánh sáng khi chụp Vận chuyển từ 2-3 ngày. Thiết kế và sản xuất bởi HADES",

            defaultImage: 'https://product.hstatic.net/1000306633/product/hades4381_f3a4cdd6c052415cb389231ff250298e.jpg',
            hoverImage: 'https://product.hstatic.net/1000306633/product/hades2577_89a1168eee344c9da5415269f9802565.jpg',
        },
        {
            id: 3,
            name: 'ABYSS SS24 STARRY PINK TEE',
            price: '$490.000',
            desription: "Áo sơ mi tay ngắn unisex Graphic và typo in kéo lụa full bản ở mặt trước áo Chi tiết hoa được thêu trên toàn bộ thân áo Logo HADES thêu ở tay áo Chất liệu: Cotton Lưu ý: Màu sắc sản phẩm có thể khác trên ảnh do điều kiện ánh sáng khi chụp Vận chuyển từ 2-3 ngày. Thiết kế và sản xuất bởi HADES",

            defaultImage: 'https://product.hstatic.net/1000306633/product/hades_15sp6444_26e950d6b7a9430c8841adad694c35cc.jpg',
            hoverImage: 'https://product.hstatic.net/1000306633/product/hades_15sp6453_a01f874e8f8541d98545f097c349e773.jpg',
        },
        {
            id: 4,
            name: 'HADES STANDARD STRIPLE SHORTS',
            price: '$380.000',
            desription: "Áo sơ mi tay ngắn unisex Graphic và typo in kéo lụa full bản ở mặt trước áo Chi tiết hoa được thêu trên toàn bộ thân áo Logo HADES thêu ở tay áo Chất liệu: Cotton Lưu ý: Màu sắc sản phẩm có thể khác trên ảnh do điều kiện ánh sáng khi chụp Vận chuyển từ 2-3 ngày. Thiết kế và sản xuất bởi HADES",

            defaultImage: 'https://product.hstatic.net/1000306633/product/hades4134_e21501a09a2a4de28997a799ef5a35b2.jpg',
            hoverImage: 'https://product.hstatic.net/1000306633/product/hades8236_b54a0c90bdd3432b9e7584f18f38a75e.jpg',
        },
        {
            id: 5,
            name: 'HADES PROFILE ELLIPSE CAP',
            price: '$350.000',
            desription: "Áo sơ mi tay ngắn unisex Graphic và typo in kéo lụa full bản ở mặt trước áo Chi tiết hoa được thêu trên toàn bộ thân áo Logo HADES thêu ở tay áo Chất liệu: Cotton Lưu ý: Màu sắc sản phẩm có thể khác trên ảnh do điều kiện ánh sáng khi chụp Vận chuyển từ 2-3 ngày. Thiết kế và sản xuất bởi HADES",

            defaultImage: 'https://product.hstatic.net/1000306633/product/hades5355_f8801511953643219ab90b841c271485.jpg',
            hoverImage: 'https://product.hstatic.net/1000306633/product/hades5359_7a8cf82924524ca0bcbf735e6f9677a7.jpg',
        },
        {
            id: 6,
            name: 'HADES LEGENDS INFINITY TANKTOP',
            price: '$380.000',
            desription: "Áo sơ mi tay ngắn unisex Graphic và typo in kéo lụa full bản ở mặt trước áo Chi tiết hoa được thêu trên toàn bộ thân áo Logo HADES thêu ở tay áo Chất liệu: Cotton Lưu ý: Màu sắc sản phẩm có thể khác trên ảnh do điều kiện ánh sáng khi chụp Vận chuyển từ 2-3 ngày. Thiết kế và sản xuất bởi HADES",

            defaultImage: 'https://product.hstatic.net/1000306633/product/hd_t71458_6cdca1be6a8e44aab4402bf17a2171a4.jpg',
            hoverImage: 'https://product.hstatic.net/1000306633/product/hd_t71473_1931276dc64b4a4aac4617cd03690708.jpg',
        },
        {
            id: 7,
            name: 'HADES SPLICE POLO',
            price: '$520.000',
            desription: "Áo sơ mi tay ngắn unisex Graphic và typo in kéo lụa full bản ở mặt trước áo Chi tiết hoa được thêu trên toàn bộ thân áo Logo HADES thêu ở tay áo Chất liệu: Cotton Lưu ý: Màu sắc sản phẩm có thể khác trên ảnh do điều kiện ánh sáng khi chụp Vận chuyển từ 2-3 ngày. Thiết kế và sản xuất bởi HADES",

            defaultImage: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
            hoverImage: 'https://product.hstatic.net/1000306633/product/hades3091_2a2c37d348ff465bbb6908172bdbc0ef.jpg',
        },
        {
            id: 8,
            name: 'HADES DRAWSTRING POCKET SHORTS',
            price: '$620.000',
            desription: "Áo sơ mi tay ngắn unisex Graphic và typo in kéo lụa full bản ở mặt trước áo Chi tiết hoa được thêu trên toàn bộ thân áo Logo HADES thêu ở tay áo Chất liệu: Cotton Lưu ý: Màu sắc sản phẩm có thể khác trên ảnh do điều kiện ánh sáng khi chụp Vận chuyển từ 2-3 ngày. Thiết kế và sản xuất bởi HADES",

            defaultImage: 'https://product.hstatic.net/1000306633/product/untitled_capture10230_52579200d83749c782ca6d8cea055afd.jpg',
            hoverImage: 'https://product.hstatic.net/1000306633/product/untitled_capture1039_fab0e910278a44ec9b2a827d6d464e80.jpg',
        },
        {
            id: 9,
            name: 'JUMBLE PRIME BACKPACK',
            price: '$795.000',
            desription: "Áo sơ mi tay ngắn unisex Graphic và typo in kéo lụa full bản ở mặt trước áo Chi tiết hoa được thêu trên toàn bộ thân áo Logo HADES thêu ở tay áo Chất liệu: Cotton Lưu ý: Màu sắc sản phẩm có thể khác trên ảnh do điều kiện ánh sáng khi chụp Vận chuyển từ 2-3 ngày. Thiết kế và sản xuất bởi HADES",

            defaultImage: 'https://product.hstatic.net/1000306633/product/untitled_capture1199_7d95868437ce4511affebf6e1f7ad512.jpg',
            hoverImage: 'https://product.hstatic.net/1000306633/product/untitled_capture1228_0a9bc51c3a504ad3bbbfeda028cdf9c7.jpg',
        },
        {
            id: 10,
            name: 'HADES REVERSIBLE JACKET',
            price: '$780.000',
            desription: "Áo sơ mi tay ngắn unisex Graphic và typo in kéo lụa full bản ở mặt trước áo Chi tiết hoa được thêu trên toàn bộ thân áo Logo HADES thêu ở tay áo Chất liệu: Cotton Lưu ý: Màu sắc sản phẩm có thể khác trên ảnh do điều kiện ánh sáng khi chụp Vận chuyển từ 2-3 ngày. Thiết kế và sản xuất bởi HADES",

            defaultImage: 'https://product.hstatic.net/1000306633/product/untitled_capture1044_500d059dcfbb41b2b589550a8c8493a4.jpg',
            hoverImage: 'https://product.hstatic.net/1000306633/product/untitled_capture1059_f273b1afc4b1494994b668e973d6ba77.jpg',
        },
    ];
    return (
        <div>
            <NewArrivals />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                {products.map((product) => (
                    <Link
                        key={product.id}
                        to="/detail-product"
                        state={{ product }}
                        className="group border-2 p-2 relative block"
                    >
                        <div className="relative overflow-hidden">
                            {/* Default Image */}
                            <img
                                className="transition-opacity duration-500 w-full group-hover:opacity-0"
                                src={product.defaultImage}
                                alt={product.name}
                            />
                            {/* Hover Image */}
                            <img
                                className="transition-opacity duration-500 w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                                src={product.hoverImage}
                                alt={`${product.name} On Hover`}
                            />
                        </div>
                        {/* Product Name and Price */}
                        <div className="mt-2 text-center">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-gray-600">{product.price}</p>
                        </div>
                    </Link>
                ))}

            </div>

            <ProductSale />
            <ProductNew />
            <ProductBestSeal />


        </div>
    );
}

export default ProductHome
