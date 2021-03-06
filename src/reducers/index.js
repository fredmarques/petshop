import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'
import events from './events';
import login from './login';
import navegation from './navegation';
import session from './session';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    form: formReducer,
    cart,
    products,
    events,
    login,
    navegation,
    session
})
const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getTotal = state =>
    getAddedIds(state)
        .reduce((total, id) =>
            total + getProduct(state, id).price * getQuantity(state, id), 0 ).toFixed(2)

export const getCartProducts = state =>
    getAddedIds(state).map(id => ({
        ...getProduct(state, id),
        quantity: getQuantity(state, id)
    }))