import axios from "axios";

const Api = axios.create({
    baseURL: 'https://boss.smartlink.id',
});

export default Api;