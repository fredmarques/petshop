import jwtDecode from 'jwt-decode'
import * as types from '../constants/ActionTypes'
import { registerUser } from '../api/user'

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
    dispatch({
        type: types.LOGOUT
    })
}

export const logonUser = (user, mode) => (dispatch, getState) => {
    return registerUser(user, mode).then(({data}) => {
        localStorage.setItem('jwt', data.token)
        return dispatch({ type: types.LOGIN_AS_USER })
      }).catch(err => console.log('erro em LogonUser: ', JSON.stringify(err)))
}

export const localLogin = () => (dispatch, getState) => {
  const token = localStorage.getItem('jwt');
  console.info(token)
  if(token) {
    const user = jwtDecode(token)
    console.info(user);
    if(user.type === 'admin') {
      return dispatch({type: types.LOGIN_AS_ADMIN, user})
    } else {
      return dispatch({type: types.LOGIN_AS_USER, user})
    } 
  }
}