import jwtDecode from 'jwt-decode'
import * as types from '../constants/ActionTypes'
import { registerUser } from '../api/user'
import setAuthToken from '../utils/setAuthToken'

export const loginAdmin = () => (dispatch, getState) => {
  dispatch({
    type: types.LOGIN_AS_ADMIN
  })
}

export const loginUser = () => (dispatch, getState) => {
  dispatch({
    type: types.LOGIN_AS_USER
  })
}

export const logout = () => (dispatch, getState) => {
  setAuthToken(false)
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
  setAuthToken(token)
  console.info(token)
  if (token) {
    const user = jwtDecode(token)
    console.info(user);
    if (user.type === 'admin') {
      return dispatch({ type: types.LOGIN_AS_ADMIN })
    } else {
      return dispatch({ type: types.LOGIN_AS_USER })
    }
  }
}