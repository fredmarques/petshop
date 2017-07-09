import * as types from '../constants/ActionTypes'
import { registerUser, login, getInfo } from '../api/user'
import setAuthToken from '../utils/setAuthToken'

export const loginAdmin = (email, password) => (dispatch, getState) => {
  return login(email, password).then(({ data }) => {

    localStorage.setItem('jwt', data.token)
    setAuthToken(data.token)

    return getInfo(data.token).then(({ data }) => {
      const { user } = data
      return dispatch({
        type: types.LOGIN_AS_ADMIN, user
      })
    }).catch(err => {
      console.log(err)
      alert('Algo de errado com o token de sessão')
    })

  }).catch(err => {
    console.log(err);
    alert('Usuário não encontrado')
  })
}

export const loginUser = (email, password) => (dispatch, getState) => {
  return login(email, password).then(({ data }) => {

    localStorage.setItem('jwt', data.token)
    setAuthToken(data.token)

    return getInfo(data.token).then(({ data }) => {
      const { user } = data
      return dispatch({
        type: types.LOGIN_AS_USER, user
      })
    }).catch(err => {
      console.log(err)
      alert('Algo de errado com o token de sessão')
    })

  }).catch(err => {
    console.log(err);
    alert('Usuário não encontrado')
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
    return getInfo(token).then(({ data }) => {
      const { user } = data
      if (user.type === 'admin' || user.id === 'admin') {
        return dispatch({ type: types.LOGIN_AS_ADMIN, user })
      } else {
        return dispatch({ type: types.LOGIN_AS_USER, user })
      }
    }).catch(err => {
      console.log(err)
      alert('deu ruim no login com token')
    })
  }
}