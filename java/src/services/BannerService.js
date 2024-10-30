import httpAxios from "./httpAxios"

const BannerService = {
    getList: async () => {
        return await httpAxios.get(`banner`);
    },
    updateById: async (id, data) => {
        return await httpAxios.post(`banner/${id}`, data);
    }
}

export default BannerService


