import httpAxios from "./httpAxios"

const ProductService = {
    getList: async () => {
        return await httpAxios.get(`product`);
    },

}

export default ProductService


