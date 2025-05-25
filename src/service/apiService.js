import { createAxiosInstance } from '../api/axios.instance'


const api = createAxiosInstance('https://jsonplaceholder.typicode.com')
export const usersList = async () => {
    try {
        const response = await api.get('/users')
        return response
    } catch (error) {
        return error
    }
}