import axios from 'axios';

const apiBaseUrl = 'http://localhost:9090/api'
const api = `${apiBaseUrl}/events`;

export function getAllEvents(){
  return axios.get(api)
}

export function registerEvent(event){
  return axios.post(api, event)
}