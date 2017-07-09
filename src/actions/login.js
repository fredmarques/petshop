import jwtDecode from 'jwt-decode'
import * as types from '../constants/ActionTypes'
import { registerUser, login } from '../api/user'
import setAuthToken from '../utils/setAuthToken'

export const loginAdmin = (email, password) => (dispatch, getState) => {
  return login(email, password).then(({data}) => {
    localStorage.setItem('jwt', data.token)
    return dispatch({
      type: types.LOGIN_AS_ADMIN
    })
  }).catch(err => {
    console.log(err);
    alert('Oops, algo deu errado')
  })
}

export const loginUser = (email, password) => (dispatch, getState) => {
  return login(email, password).then(({data}) => {
    localStorage.setItem('jwt', data.token)
    setAuthToken(data.token)
    return dispatch({
      type: types.LOGIN_AS_USER
    })
  }).catch(err => {
    console.log(err);
    alert('Oops, algo deu errado')
  })
}

export const logout = () => (dispatch, getState) => {
  setAuthToken(false)
  localStorage.removeItem('jwt')
  dispatch({
    type: types.LOGOUT
  })
}

export const logonUser = (mode) => (dispatch, getState) => {
  return registerUser(mode).then(({ data }) => {
    localStorage.setItem('jwt', data.token)
    setAuthToken(data.token)
    return dispatch({ type: types.LOGIN_AS_USER })
  }).catch(err => console.log('erro em LogonUser: ', JSON.stringify(err)))
}

export const localLogin = () => (dispatch, getState) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    setAuthToken(token)
    const user = jwtDecode(token)
    if (user.type === 'admin') {
      return dispatch({ type: types.LOGIN_AS_ADMIN })
    } else {
      return dispatch({ type: types.LOGIN_AS_USER })
    }
  }
}