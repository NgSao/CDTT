
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../layout/Home';
import DetailProduct from '../layout/DetailProduct';
import Login from '../layout/Login';

const Main = () => (
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/detail-product" element={<DetailProduct />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </main>
);

export default Main;