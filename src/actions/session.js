import { USER_INFO } from '../constants/ActionTypes';
import { getInfo } from '../api/user';

export const getUserInfo = () => (dispatch, getState) => {
  return getInfo().then(currentUser => {
    console.log('currentUSer: ', currentUser)
    return dispatch({
      type: USER_INFO,
      user: currentUser
    })
  }).catch(err => {
    console.log(err);
    alert('Não foi possivel resgatar as informações do usuário')
  })
} 