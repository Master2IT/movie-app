import conf from '@/config/config'
import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: conf.base_url, // api base_url
    timeout: 120000, // request timeout,
});
// request interceptor
service.interceptors.request.use(
    config => {
        // Do something before request is sent
        // config.headers['Accept'] = "application/json";
        config.headers['Access-Control-Allow-Origin'] = '*';
        config.headers['Access-Control-Allow-Credentials'] = true;

        if (!config.hasOwnProperty('params')) {
            config.params = {
                api_key: conf.api_key
            }
        } else {
            config.params.api_key = conf.api_key
        }

        return config
    },
    error => {
        // Do something with request error
        Promise.reject(error)
    }
);

// response interceptor
service.interceptors.response.use(
    response => {

        if (response.status === 401) {
            // auto logout if 401 response returned from api
        }

        if (!response.data.error)
            return Promise.resolve(response.data);

        const error = response.message;
        return Promise.reject(error);
    },
    error => {
        return Promise.reject(error)
    }
);

export default service