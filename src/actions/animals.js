import { REGISTER_ANIMAL, UPDATE_ANIMAL, DELETE_ANIMAL } from '../constants/ActionTypes';
import { registerAnimal as ra, removeAnimal, changeAnimal} from '../api/user';

export const registerAnimal = (animal) => (dispatch, ownProps) => {
  return ra(animal).then(resp => {
    localStorage.setItem('jwt', resp.data.token)
    return dispatch({
      type: REGISTER_ANIMAL,
      animal
    })
  }).catch(err => { console.info(err); })
}

export const updateAnimal = (animalId, nextAnimal) => (dispatch, ownProps) => {
  return changeAnimal(animalId, nextAnimal).then(resp => {
    localStorage.setItem('jwt', resp.data.token)
    return dispatch({
      type: UPDATE_ANIMAL,
      animalId, animal: nextAnimal
    })
  }).catch(err => console.log(err))
}

export const deleteAnimal = (animalId) => (dispatch, ownProps) => {
  console.log('removendo animal: ', animalId)
  return removeAnimal(animalId).then(resp => {
    localStorage.setItem('jwt', resp.data.token)
    return dispatch({
      type: DELETE_ANIMAL,
      animalId
    })
  }).catch(err => console.log(err))
}