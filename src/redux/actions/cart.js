import { ADD_TO_CART, REMOVE_FROM_CART, SET_ITEMS_LIST } from '../constants/actionTypes';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
    },
  };
}

export const removeFromCart = (index) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
     index,
    },
  };
}

export const setItemList = payload => ({ type: SET_ITEMS_LIST, payload })