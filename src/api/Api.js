import Vue from "vue";
import axios from "axios";

const Api = axios.create({
    baseURL: 'https://boss.smartlink.id',
    timeout: 3000,
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
    }
});

Vue.prototype.$axios = axios.create(Api)

Vue.prototype.$api = Api

export default Api;