import { LOGIN_AS_ADMIN, LOGIN_AS_USER } from '../constants/ActionTypes';

const initialState = {
    loginStatus: false,
    loginMode: 'user'
};

const login = (state = initialState,  action) => {
    switch (action.type) {
        case LOGIN_AS_ADMIN:
            return {
                ...state,
                loginStatus: true,
                loginMode: 'admin'
            }
        case LOGIN_AS_USER:
            return {
                ...state,
                loginStatus: true,
                loginMode: 'user'
            }
        default:
            return state;
    }
};
export default login;

export const loginStatus = state => {
    return state.login.loginStatus;
}
export const loginMode = state => {
    return state.login.loginMode;
}