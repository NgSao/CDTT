import httpAxios from "./httpAxios"

const UserService = {
    getList: async () => {
        return await httpAxios.get(`user`);
    },
    trash: async () => {
        return await httpAxios.get(`user/trash`);
    },
    show: async (id) => {
        return await httpAxios.get(`user/show/${id}`);
    },
    store: async (data) => {
        return await httpAxios.post(`user/store`, data);
    },
    update: async (data, id) => {
        return await httpAxios.post(`user/update/${id}`, data);
    },
    delete: async (id) => {
        return await httpAxios.get(`user/delete/${id}`);
    },
    restore: async (id) => {
        return await httpAxios.get(`user/restore/${id}`);
    },
    destroy: async (id) => {
        return await httpAxios.delete(`user/destroy/${id}`);
    },
}

export default UserService


