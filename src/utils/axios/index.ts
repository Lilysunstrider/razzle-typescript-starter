import axios from "axios";
import { runtimeConfig } from "@/config";
import moment from "moment";

const instance = axios.create({
    baseURL: runtimeConfig.API_BASE
});
instance.interceptors.request.use(req => {
    const timestamp = +moment();
    const channel = runtimeConfig.CHANNEL;
    req.params = { timestamp, channel, ...req.params };
    return req;
});
export default instance;
