import axios from 'axios';
const apiBaseUrl = 'http://localhost:9090/api'

export function registerUser(user, mode){
    return axios.post(`${apiBaseUrl}/users`, {...user, mode})
}