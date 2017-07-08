import * as types from '../constants/ActionTypes'
export const addEvent = (newEvent) => (dispatch, getState) => {
    dispatch({
        type: types.ADD_EVENT,
        event: newEvent 
    })
}