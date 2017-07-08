import {LOGIN_AS_ADMIN, LOGIN_AS_USER}  from '../constants/ActionTypes'
const initalNavList = [
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
  ...initalNavList,
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
  ...initalNavList,
]

export default function navegation(state = initalNavList, action) {
  switch (action.type) {
    case LOGIN_AS_USER:
      return userList
    case LOGIN_AS_ADMIN:
     return adminList 
    default:
      return state;
  }
}