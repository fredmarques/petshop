import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contextReducer from './context_reducer';

const rootReducer = combineReducers({
  context: contextReducer,
  form: formReducer 
});

export default rootReducer;