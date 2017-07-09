import { LOGIN_AS_ADMIN, LOGIN_AS_USER, REGISTER_ANIMAL } from '../constants/ActionTypes';

const initialState = {
    animalList: []
};

const session = (state = initialState, action) => {
  console.info(state, action)
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
    console.info(state)
      return {
          ...state,
            animalList: [...state.animalList, action.data.animal]
      }
    default:
      return state;
  }
}
export default session;