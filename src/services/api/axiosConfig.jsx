import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

const BASE_URL = "http://localhost:8080/api/v1/";

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const useAxios = () => {
    const { token } = useAuth();

    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ token }`
        },
    });
}