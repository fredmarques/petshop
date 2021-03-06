import dog from '../assets/dog.jpg';
import axios from 'axios';

const apiBaseUrl = 'http://localhost:9090/api'
const api = `${apiBaseUrl}/products`;

export function insertProduct(product) {
  return axios.post(api, product)
}

export function getAll() {
  return axios.get(`${api}/all`)
}

export default [
{
    "id":1, 
    "inventory": 100,
    "image": dog,
    "alt": "dog",
    "width": 256,
    "height": 256,
    "heading": "Dog bonitinho para ficar de exemplo!",
    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum harum dolorem velit quasi vitae vero nostrum dolores rem dignissimos. Doloremque harum culpa qui dolores, corporis hic, sint sed fugit provident."
},
{
    "id":2, 
    "inventory": 100,
    "image": dog,
    "alt": "dog",
    "width": 256,
    "height": 256,
    "heading": "Dog bonitinho para ficar de exemplo!",
    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum harum dolorem velit quasi vitae vero nostrum dolores rem dignissimos. Doloremque harum culpa qui dolores, corporis hic, sint sed fugit provident."
},
{
    "id":3, 
    "inventory": 100,
    "image": dog,
    "alt": "dog",
    "width": 256,
    "height": 256,
    "heading": "Dog bonitinho para ficar de exemplo!",
    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum harum dolorem velit quasi vitae vero nostrum dolores rem dignissimos. Doloremque harum culpa qui dolores, corporis hic, sint sed fugit provident."
},
{
    "id":4, 
    "inventory": 100,
    "image": dog,
    "alt": "dog",
    "width": 256,
    "height": 256,
    "heading": "Dog bonitinho para ficar de exemplo!",
    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum harum dolorem velit quasi vitae vero nostrum dolores rem dignissimos. Doloremque harum culpa qui dolores, corporis hic, sint sed fugit provident."
}
];
