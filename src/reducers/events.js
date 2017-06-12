import { ADD_EVENT } from '../constants/ActionTypes';

const events = (state = {events: []}, action) => {
    switch (action.type) {
        case ADD_EVENT:
        console.log(state);
        console.log(action);
            return {
                events: [...state.events, action.event]
            }
        default:
            return state;
    }
}
export default events;

export const getAllEvents = (state) => (state.events || []);