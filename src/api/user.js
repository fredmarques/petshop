import axios from 'axios';
const apiBaseUrl = 'http://localhost:9090/api'
const api = `${apiBaseUrl}/users`;

export function registerUser(user, mode){
    return axios.post(api, {...user, mode})
}

export function registerAnimal(animal) {
  return axios.post(`${api}/animal`, animal)
}