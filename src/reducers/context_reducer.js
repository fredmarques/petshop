import { ACTION } from '../actions';
// import _ from 'lodash';

export default function(state = {}, action){
    switch (action.type) {
    case ACTION:
        return { ...state, [action.payload.id]: action.payload.data };
    default:
        return state;

    }
}
