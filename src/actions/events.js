import * as types from '../constants/ActionTypes'
import {getAllEvents, registerEvent } from '../api/events'

export const addEvent = (newEvent) => (dispatch, getState) => {
  return registerEvent(newEvent).then(() => {
    return dispatch({
        type: types.ADD_EVENT,
        event: newEvent 
    })
  }).catch(err =>  { console.log(err); alert('Faça login antes de agendar um serviço') })
}

export const getEvents = () => (dispatch, getState) => {
  return getAllEvents().then((resp) => {
    const { events } = resp.data;
    return dispatch({
      type: types.SET_EVENTS,
      events
    })
  }).catch(err => { console.log(err) })
}