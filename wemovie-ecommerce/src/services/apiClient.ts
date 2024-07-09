import axios from 'axios'
import { apiUrl } from './apiUrl'

export function setupAPIClient(){
    const api = axios.create({
        baseURL: `${apiUrl}`,
    })

    return api;
}