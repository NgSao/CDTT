import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Admin from './admin/Admin';
// import ProductList from './scenes/producList/ProductList';
// import ProductDetail from './scenes/productDetail/ProductDetail';
// import Home from './scenes/home/Home';
// import Checkout from './scenes/checkout/Checkout';
// import Confirmation from './scenes/checkout/Confirmation';
// import CartMenu from './scenes/global/CartMenu';
import Dashboard from './admin/scenes/Dashboard';
// import AdminProduct from './admin/scenes/Product/AdminProduct';
import AdminProductBox from './admin/scenes/Product/AdminProductBox';
import AdminCategory from './admin/scenes/Product/AdminCategory';

import AdminImageProduct from './admin/scenes/Product/AdminImageProduct';
import EditProduct from './admin/scenes/Product/EditProduct';
import AddProduct from './admin/scenes/Product/AddProduct';
import AddCategory from './admin/scenes/Category/AddCategory';
import EditCategory from './admin/scenes/Category/EditCategory';
import Banner from './admin/scenes/Banner/Banner';
import ProSale from './admin/scenes/ProductSale/ProSale';
import EditProSale from './admin/scenes/ProductSale/EditProSale';
import ProductStore from './admin/scenes/ProductStore/ProductStore';
import ProductStoreComponent from './admin/scenes/ProductStore/ProductStore';
import EditStore from './admin/scenes/ProductStore/EditStore';
import Brand from './admin/scenes/Brand/Brand';
import AddBrand from './admin/scenes/Brand/AddBrand';
import EditBrand from './admin/scenes/Brand/EditBrand';
import TrashCategory from './admin/scenes/Category/TrashCategory';
import TrashBrand from './admin/scenes/Brand/TrashBrand';
import TrashBanner from './admin/scenes/Banner/TrashBanner';
import EditBanner from './admin/scenes/Banner/EditBanner';
import AddBanner from './admin/scenes/Banner/AddBanner';
// import AdminProductDetail from './admin/scenes/Product/AdminProductDetail';
// import AdminProductEdit from './admin/scenes/Product/AdminProductEdit';
// import AdminProductAdd from './admin/scenes/Product/AdminProductAdd';
import AdminUserController from './admin/scenes/User/AdminUserController';
import EditUser from './admin/scenes/User/EditUser';
import TrashUser from './admin/scenes/User/TrashUser';
import Oderdetail from './admin/scenes/Oderdetail/Oderdetail';
import Login from './admin/components/Login';
import Config from './admin/scenes/Confi/Config';
import EditConfig from './admin/scenes/Confi/EditConfig';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    
    path: '/',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/admin/product',
        element: <AdminProductBox />
      },
      {
        path: '/admin/productsale',
        element: <ProSale />
      },
      {
        path: '/admin/productsale/edit/:id',
        element: <EditProSale />
      },
      {
        path: '/admin/productstore',
        element: <ProductStoreComponent />
      },
      {
        path: '/admin/productstore/edit/:id',
        element: <EditStore />
      },
      {
        path: '/admin/product/add',
        element: <AddProduct />
      },
      {
        path: '/admin/product/edit/:id',
        element: <EditProduct />
      },
      {
        path: '/admin/brand',
        element: <Brand />
      },
      {
        path: '/admin/brand/add',
        element: <AddBrand />
      },
      {
        path: '/admin/brand/edit/:id',
        element: <EditBrand />
      },
      {
        path: '/admin/brand/trash',
        element: <TrashBrand />
      },
      {
        path: '/admin/category',
        element: <AdminCategory />
      },
      {
        path: '/admin/category/add',
        element: <AddCategory />
      },
      {
        path: '/admin/category/trash',
        element: <TrashCategory />
      },
      {
        path: '/admin/category/edit/:id',
        element: <EditCategory />
      },
      {
        path: '/admin/banner',
        element: <Banner />
      },
      {
        path: '/admin/banner/add',
        element: <AddBanner />
      },
      {
        path: '/admin/banner/edit/:id',
        element: <EditBanner />
      },
      {
        path: '/admin/banner/trash',
        element: <TrashBanner />
      },
      {
        path: '/admin/user',
        element: <AdminUserController />
      },
      {
        path: '/admin/user/edit/:id',
        element: <EditUser />
      },
      {
        path: '/admin/user/trash',
        element: <TrashUser/>
      },
      {
        path: '/admin/image',
        element: <AdminImageProduct />
      },
      {
        path: '/admin/order',
        element: <Oderdetail />
      },
      {
        path: '/admin/config',
        element: <Config />
      },
      {
        path: '/admin/config/edit/:id',
        element: <EditConfig />
      },
    ]

  }

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);