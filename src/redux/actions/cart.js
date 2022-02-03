import { ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART } from '../constants/actionTypes';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      cart: [ product ],
    },
  };
}

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId,
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