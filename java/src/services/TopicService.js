import httpAxios from "./httpAxios"

const TopicService = {
    getList: async () => {
        return await httpAxios.get(`topic`);
    },
    trash: async () => {
        return await httpAxios.get(`topic/trash`);
    },
    show: async (id) => {
        return await httpAxios.get(`topic/show/${id}`);
    },
    store: async (data) => {
        return await httpAxios.post(`topic/store`, data);
    },
    update: async (data, id) => {
        return await httpAxios.post(`topic/update/${id}`, data);
    },
    delete: async (id) => {
        return await httpAxios.get(`topic/delete/${id}`);
    },
    restore: async (id) => {
        return await httpAxios.get(`topic/restore/${id}`);
    },
    destroy: async (id) => {
        return await httpAxios.delete(`topic/destroy/${id}`);
    },
}

export default TopicService


