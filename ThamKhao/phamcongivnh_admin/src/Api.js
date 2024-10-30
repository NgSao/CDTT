import axios from "axios";

const Api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});


Api.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

const BannerService = {
    getList: async () => {
        return await Api.get('banner');
    },
    getId: async (id) => {
        return await Api.get(`banner/show/${id}`);
    },
    add: async (banner) => {
        return await Api.post('banner/store', banner);
    },

    update: async (id, banner) => {
        return await Api.post(`banner/update/${id}`, banner); // Sử dụng POST thay vì PUT
    },
    delete: async (id) => {
        return await Api.get(`banner/delete/${id}`);
    },
    getTrash: async () => {
        return await Api.get('banner/trash');
    },

    editstatus: async (id, status) => {
        return await Api.post(`banner/status/${id}`, status);
    },
    trashdelete: async (id) => {
        return await Api.delete(`banner/trashdelete/${id}`);
    },

};
const UserService = {
    getList: async () => {
        return await Api.get('user');
    },
    getId: async (id) => {
        return await Api.get(`user/show/${id}`);
    },
    add: async (user) => {
        return await Api.post('user/store', user);
    },

    update: async (id, user) => {
        return await Api.post(`user/update/${id}`, user); // Sử dụng POST thay vì PUT
    },
    delete: async (id) => {
        return await Api.get(`user/delete/${id}`);
    },
    getTrash: async () => {
        return await Api.get('user/trash');
    },

    editstatus: async (id, status) => {
        return await Api.post(`user/status/${id}`, status);
    },
    trashdelete: async (id) => {
        return await Api.delete(`user/trashdelete/${id}`);
    },

};
const BrandService = {

    getList: async () => {
        return await Api.get('brand');
    },
    getId: async (id) => {
        return await Api.get(`brand/show/${id}`);
    },
    getTrash: async () => {
        return await Api.get('brand/trash');
    },


    add: async (brand) => {
        return await Api.post('brand/store', brand);
    },


    update: async (id, brand) => {
        return await Api.post(`brand/update/${id}`, brand); // Sử dụng POST thay vì PUT
    },


    delete: async (id) => {
        return await Api.get(`brand/delete/${id}`);
    },
    editstatus: async (id, status) => {
        return await Api.post(`brand/status/${id}`, status);
    },
    trashdelete: async (id) => {
        return await Api.delete(`brand/trashdelete/${id}`);
    },
};

const CategoryService = {

    getList: async () => {
        return await Api.get('category');
    },
    getTrash: async () => {
        return await Api.get('category/trash');
    },
    getId: async (id) => {
        return await Api.get(`category/show/${id}`);
    },


    add: async (category) => {
        return await Api.post('category/store', category);
    },


    update: async (id, category) => {
        return await Api.post(`category/update/${id}`, category); // Sử dụng POST thay vì PUT
    },


    delete: async (id) => {
        return await Api.get(`category/delete/${id}`);
    },
    editstatus: async (id, status) => {
        return await Api.post(`category/status/${id}`, status);
    },
    trashdelete: async (id) => {
        return await Api.delete(`category/trashdelete/${id}`);
    },
};
const ProductService = {
    getList: async () => {
        return await Api.get('product');
    },
    getId: async (id) => {
        return await Api.get(`product/show/${id}`);
    },
    add: async (product) => {
        return await Api.post('product/store', product);
    },
    update: async (id, product) => {
        return await Api.post(`product/update/${id}`, product);
    },
    delete: async (id) => {
        return await Api.delete(`product/${id}`);
    },
    editstatus: async (id, status) => {
        return await Api.post(`product/${id}`, status);
    },
};
const ProductSale = {
    getList: async () => {
        return await Api.get('productsales');
    },
    getId: async (id) => {
        return await Api.get(`productsales/${id}`);
    },
    update: async (id, product) => {
        return await Api.post(`productsales/${id}`, product); // POST hoặc PUT
    },
    editstatus: async (id, status) => {
        return await Api.post(`productsales/status/${id}`, status); // POST hoặc PUT
    },


};
const ProductStore = {
    getList: async () => {
        return await Api.get('productstore');
    },

    editstatus: async (id, status) => {
        return await Api.post(`productstore/status/${id}`, status); // POST hoặc PUT
    },
    getId: async (id) => {
        return await Api.get(`productstore/show/${id}`);
    },
    update: async (id, product) => {
        return await Api.post(`productstore/update/${id}`, product);
    },
    add: async (product) => {
        return await Api.post('productstore/store', product);
    },

};
const OrderDetailService = {
    getList: async () => {
        return await Api.get('orderdetail');
    },


};
const ConfigService = {
    getList: async () => {
        return await Api.get('config');
    },

    getId: async (id) => {
        return await Api.get(`config/show/${id}`);
    },

    update: async (id, config) => {
        return await Api.post(`config/update/${id}`, config); // Sử dụng POST thay vì PUT
    },


};
export {
    BannerService,
    CategoryService,
    ProductService,
    ProductSale,
    ProductStore,
    BrandService,
    UserService,
    OrderDetailService,
    ConfigService
};
