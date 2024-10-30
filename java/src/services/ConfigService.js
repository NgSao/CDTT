import httpAxios from "./httpAxios"

const ConfigService = {
    getList: async () => {
        return await httpAxios.get(`config`);
    },
    store: async (data) => {
        return await httpAxios.post(`config/store`, data);
    },
    update: async (data, id) => {
        return await httpAxios.post(`config/update/${id}`, data);
    },

}

export default ConfigService


