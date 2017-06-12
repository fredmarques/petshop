import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = (productId, quantity) => ({
  type: types.ADD_TO_CART,
  payload: {productId, quantity}
})

export const addToCart = (productId, quantity) => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId, quantity))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()
  console.log('chamei o checkout')

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}

export const clearCart = () => (dispatch, getState) => {
  dispatch({
    type: types.CLEAR_CART_REQUEST,
  })
}

export const addEvent = (newEvent) => (dispatch, getState) => {
    dispatch({
        type: types.ADD_EVENT,
        event: newEvent 
    })
}