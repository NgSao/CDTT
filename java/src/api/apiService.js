import axios from "axios";

const API_URL = "http://localhost:8080";

function callApi(endpoint, method = "GET", body) {
    return axios({
        method,
        url: `${API_URL}/api/${endpoint}`,
        data: body,
    }).catch((e) => {
        console.log(e);
        throw e;
    });
}

export function index(endpoint) {
    return callApi(endpoint, "GET");
}

export function trash(endpoint) {
    return callApi(endpoint, "GET");
}

export function status(endpoint, id) {
    return callApi(endpoint + "/" + id, "GET");
}

export function show(endpoint, id) {
    return callApi(endpoint + "/" + id, "GET");
}

export function store(endpoint, data) {
    return callApi(endpoint, "POST", data);
}

export function update(endpoint, id, data) {
    return callApi(endpoint + "/" + id, "POST", data);
}

export function deletee(endpoint, id) {
    return callApi(endpoint + "/" + id, "GET");
}

export function restore(endpoint, id) {
    return callApi(endpoint + "/" + id, "GET");
}

export function destroy(endpoint, id) {
    return callApi(endpoint + "/" + id, "DELETE");
}

export function img(imgName) {
    return API_URL + "/img/" + imgName;
}


