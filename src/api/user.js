import axios from 'axios';
const apiBaseUrl = 'http://localhost:9090/api'
const api = `${apiBaseUrl}/users`;

export function registerUser(user, mode){
    return axios.post(api, {...user, mode})
}

export function registerAnimal(user, animal) {
  return axios.post(`${api}/animal`, {user, animal})
}