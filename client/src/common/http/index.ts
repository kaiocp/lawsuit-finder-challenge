import axios from 'axios';

const http = axios.create({
    baseURL: 'http://0.0.0.0:8000/'
});

export default http;