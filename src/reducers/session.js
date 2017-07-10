import {
  LOGIN_AS_ADMIN,
  LOGIN_AS_USER,
  REGISTER_ANIMAL,
  DELETE_ANIMAL,
  UPDATE_ANIMAL,
  USER_INFO,
  LOGOUT
 } from '../constants/ActionTypes';

const initialState = {
  animalList: []
};

const session = (state = initialState, action) => {
  let nextList = state.animalList;
  switch (action.type) {
    case LOGIN_AS_ADMIN:
      return {
        ...state,
        ...action.user
      }
    case LOGIN_AS_USER:
      return {
        ...state,
        ...action.user
      }

    case REGISTER_ANIMAL:
      return {
        ...state,
        ...action.user,
        animalList: [...state.animalList, action.animal]
      }
    case UPDATE_ANIMAL:
      const upindex = state.animalList.findIndex(e => e.id === action.animalId)
      let upnextList = state.animalList;
      if(upindex >= 0 ) {
        upnextList[upindex] = action.nextAnimal
      }
      return {
        ...state,
        animalList: upnextList
      }

    case DELETE_ANIMAL:
      const delindex = state.animalList.findIndex(e => e.id === action.animalId)
      let delnextList = state.animalList;
      if(delindex >= 0 ) {
        delnextList.splice(delindex, 1)
      }
      return {
        ...state,
        animalList: delnextList
      }
    case USER_INFO:
      return {
        ...state,
        ...action.user
      }
    case LOGOUT:
      return {
        ...initialState
      }
    default:
      return state;
  }
}
export default session;

export const getAllAnimals = (state) => (state.session.animallist || []);