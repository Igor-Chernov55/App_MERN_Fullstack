import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3002/api'
})

interface AxiosConfigType {
    headers: {
        Authorization: string
    }
}

// Добавляем перехватчик запросов interceptors
instance.interceptors.request.use((config: any) => {
    config.headers.Authorization = window.localStorage.getItem('token')
})

export default instance
