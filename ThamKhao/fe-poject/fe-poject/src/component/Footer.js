import React from 'react';
import NewArrivals from '../layout/NewArrivals';

function Footer() {
  const storeLocations = [
    "HADES STUDIO Store 1: 26 LY TU TRONG STREET, DISTRICT 1, HOCHIMINH (THE NEW PLAYGROUND).",
    "Store 2: 140 NGUYEN HY QUANG, DONG DA DISTRICT, HANOI.",
    "Store 3: 4 PHAM NGU LAO STREET, DISTRICT 1, HOCHIMINH.",
    "Store 4: 56 MAU THAN, NINH KIEU DISTRICT, CANTHO.",
    "Store 5: 152 TRAN QUANG DIEU, WARD 14, DISTRICT 3, HCM."
  ];

  const policies = [
    "Chính sách sử dụng website",
    "Phương thức thanh toán",
    "Chính sách đổi trả",
    "Chính sách giao nhận - vận chuyển",
    "Điều khoản dịch vụ",
    "Hướng dẫn mua hàng",
    "Chính sách bảo mật"
  ];

  const contactInfo = [
    { label: "Địa chỉ", value: "123 Đường ABC, Quận 1, TP. HCM" },
    { label: "Số điện thoại", value: "(+84) 123 456 789" },
    { label: "Email", value: "contact@hades.vn" }
  ];

  return (
    <footer className="bg-white-800 text-black mt-10">

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Hệ thống cửa hàng */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">HỆ THỐNG CỬA HÀNG HADES</h4>
            {storeLocations.map((location, index) => (
              <p key={index} className="text-gray-400">{location}</p>
            ))}
          </div>

          {/* Chính sách */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">CHÍNH SÁCH</h4>
            <ul className="text-gray-400 space-y-2">
              {policies.map((policy, index) => (
                <li key={index}>
                  {policy}
                </li>
              ))}
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div className="w-full md:w-1/3 px-4">
            <h4 className="text-lg font-semibold mb-4">THÔNG TIN LIÊN HỆ</h4>
            {contactInfo.map((info, index) => (
              <p key={index} className="text-gray-400"><strong>{info.label}:</strong> {info.value}</p>
            ))}
            <div className="mt-4 space-x-4">
              {/* Hardcoded Social Links */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
