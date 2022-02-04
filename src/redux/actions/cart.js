import { ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART } from '../constants/actionTypes';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
    },
  };
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
     id,
    },
  };
}

export const loadCart = (product) => {
  return {
    type: LOAD_CART,
    payload: {
      cart: [ product ],
    },
  };
};