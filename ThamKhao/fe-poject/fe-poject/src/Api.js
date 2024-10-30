import axios from "axios";

const Api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});


export const login = async (username, password) => {
    try {
        const response = await Api.post('login', {
            username,
            password
        });
        return response;
    } catch (error) {
        throw error;
    }
};

export const getUserInfo = async (id, token) => {
    try {
        const response = await Api.get(`user/show/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.user;
    } catch (error) {
        throw error;
    }
};


Api.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);



export const ProductSaleService = {
    getList: async () => {
        return await Api.get('productsalefe');
    },
    getNew: async () => {
        return await Api.get('product/getnew');
    },
    getBestSeal: async () => {
        return await Api.get('orderdetail/bestseal');
    }



};

export default Api;
