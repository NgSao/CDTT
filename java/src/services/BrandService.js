import httpAxios from "./httpAxios"

const BrandService = {
    getList: async () => {
        return await httpAxios.get(`brand`);
    },
    trash: async () => {
        return await httpAxios.get(`brand/trash`);
    },
    show: async (id) => {
        return await httpAxios.get(`brand/show/${id}`);
    },
    store: async (data) => {
        return await httpAxios.post(`brand/store`, data);
    },
    update: async (id, data) => {
        return await httpAxios.post(`brand/update/${id}`, data);
    },
    delete: async (id) => {
        return await httpAxios.get(`brand/delete/${id}`);
    },
    restore: async (id) => {
        return await httpAxios.get(`brand/restore/${id}`);
    },
    destroy: async (id) => {
        return await httpAxios.delete(`brand/destroy/${id}`);
    },
}

export default BrandService


