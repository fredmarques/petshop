import { LOGIN_AS_ADMIN, LOGIN_AS_USER, REGISTER_ANIMAL, USER_INFO, LOGOUT } from '../constants/ActionTypes';

const initialState = {
  animalList: []
};

const session = (state = initialState, action) => {
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