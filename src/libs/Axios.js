import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://book-crud-service-6dmqxfovfq-et.a.run.app",
    withCredentials: true,
});

export default axios;
