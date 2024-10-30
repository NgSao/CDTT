import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './page/Home';
import Detail from './page/Detail';
import Login from './page/Login';
import Register from './page/Register';
import Cart from './page/Cart';
import CartCustomer from './page/CartCustomer';
import CartPayment from './page/CartPayment';
import CartPaymentSuccess from './page/CartPaymentSuccess';
import CheckOrder from './page/CheckOrder';
import Customer from './page/customer/Customer';
import CustomerOrderHistory from './page/customer/CustomerOrderHistory';
import CustomerOrderNew from './page/customer/CustomerOrderNew';
import CustomerInfo from './page/customer/CustomerInfo';
import Product from './page/Product';
import Admin from './admin/Admin';
import Dashboard from './admin/components/home/Dashboard';
import ProductList from './admin/components/product/ProductList';
import NotFound from './page/NotFound';
import BlogLayout from './page/BlogLayout';
import CustomerList from './admin/components/customer/CustomerList';
import CategoryList from './admin/components/category/CategoryList';
import BrandList from './admin/components/brand/BrandList';
import ConfigList from './admin/components/config/ConfigList';
import BannerList from './admin/components/banner/BannerList';
import OrderList from './admin/components/order/OrderList';
import LoginAdmin from './admin/components/user/LoginAdmin';
import TopicList from './admin/components/topic/TopicList';
import PostList from './admin/components/topic/post/PostList';
import BrandEdit from './admin/components/brand/BrandEdit';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'detail',
        element: <Detail />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'cart/customer',
        element: <CartCustomer />
      },
      {
        path: 'cart/payment',
        element: <CartPayment />
      },
      {
        path: 'cart/success',
        element: <CartPaymentSuccess />
      },
      {
        path: 'checkorder',
        element: <CheckOrder />
      },
      {
        path: 'customer',
        element: <Customer />
      },
      {
        path: 'historyorder',
        element: <CustomerOrderHistory />
      },
      {
        path: 'ordernew',
        element: <CustomerOrderNew />
      },
      {
        path: 'account',
        element: <CustomerInfo />
      },
      {
        path: 'products',
        element: <Product />
      },
      {
        path: 'blogs',
        element: <BlogLayout />
      },
    ]
  },
  {
    path: '/admin/login',
    element: <LoginAdmin />,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'products',
        element: <ProductList />
      },
      {
        path: 'categorys',
        element: <CategoryList />
      },
      {
        path: 'brands',
        element: <BrandList />
      },
      {
        path: 'banners',
        element: <BannerList />
      },
      {
        path: 'customers',
        element: <CustomerList />
      },
      {
        path: 'config',
        element: <ConfigList />
      },
      {
        path: 'orders',
        element: <OrderList />
      },
      {
        path: 'topics',
        element: <TopicList />
      },
      {
        path: 'topic/post',
        element: <PostList />
      },

    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

