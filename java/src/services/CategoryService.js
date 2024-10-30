import httpAxios from "./httpAxios"

const CategoryService = {
    getList: async () => {
        return await httpAxios.get(`category`);
    },

}

export default CategoryService


