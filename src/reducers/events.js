import { ADD_EVENT, SET_EVENTS } from '../constants/ActionTypes';

const events = (state = {events: []}, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return {
              events: [...state.events, action.event]
            }
        case SET_EVENTS:
            return {
              events: [...state.events, ...action.events]
            }
        default:
            return state;
    }
}
export default events;

export const getAllEvents = (state) => (state.events || []);