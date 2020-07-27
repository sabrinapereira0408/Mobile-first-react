import Axios from 'axios';

export const rootUrl = 'http://localhost/';

export const Http = Axios.create({
    baseURL: rootUrl
})