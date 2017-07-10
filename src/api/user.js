import axios from 'axios';
const apiBaseUrl = 'http://localhost:9090/api'
const api = `${apiBaseUrl}/users`;

export function registerUser(user, mode){
    return axios.post(api, {...user, mode})
}

export function registerAnimal(animal) {
  return axios.post(`${api}/animal`, animal)
}

export function getInfo(){
  return axios.get(`${api}/userInfo`)
}

export function login(email, password) {
  return axios.get(`${api}/${email}/${password}`)
}

export function removeAnimal(animalId) {
  return axios.delete(`${api}/animal/${animalId}`)
}

export function changeAnimal(animalId, animal) {
  return axios.put(`${api}/animal/${animalId}`, animal)
}