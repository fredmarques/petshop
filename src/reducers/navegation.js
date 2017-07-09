import {LOGIN_AS_ADMIN, LOGIN_AS_USER, LOGOUT}  from '../constants/ActionTypes'
const initialNavList = [
  {
    path: '/home',
    label: 'Home'
  },
  {
    path: '/services',
    label: 'Serviços'
  },
  {
    path: '/products',
    label: 'Produtos'
  },
  {
    path: '/contact',
    label: 'Contato'
  },
  {
    path: '/calendar',
    label: 'Calendário'
  },
  {
    path: '/user',
    label: 'Usuario'
  }
]

const userList = [
  ...initialNavList,
  {
    path: '/cart',
    label: 'Carrinho'
  },
  {
    path: '/pet',
    label: 'Meus pets'
  }
]

const adminList = [
  ...initialNavList,
]

export default function navegation(state = initialNavList, action) {
  switch (action.type) {
    case LOGIN_AS_USER:
      return userList
    case LOGIN_AS_ADMIN:
     return adminList 
    case LOGOUT:
     return initialNavList 
    default:
      return state;
  }
}