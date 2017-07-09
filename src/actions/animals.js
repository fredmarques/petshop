import { REGISTER_ANIMAL } from '../constants/ActionTypes';
import { registerAnimal as ra} from '../api/user';

export const registerAnimal = (animal) => (dispatch, ownProps) => {
  return ra(animal).then(resp => {
    localStorage.setItem('jwt', resp.data.token)
    return dispatch({
      type: REGISTER_ANIMAL,
      data: animal
    })
  }).catch(err => { console.info(err); alert('Ooops!, Algo deu errado')})
}