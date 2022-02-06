import { ADD_TO_CART, REMOVE_FROM_CART, SET_ITEMS_LIST, ADJUST_ITEM_QTY } from '../constants/actionTypes';

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

export const adjustQty = (itemID, qty) => {
  return {
    type: ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const setItemList = payload => ({ type: SET_ITEMS_LIST, payload })