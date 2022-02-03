import { REMOVE_FROM_CART, ADD_TO_CART, LOAD_CART } from '../constants/actionTypes';

const reducer = (cart = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...cart,
        product: action.payload, 
      };
    }
    case REMOVE_FROM_CART: {
      return { 
        ...cart
      };
    }
    case LOAD_CART: {
      return {
        ...cart,
       product: action.payload
      };
    }
    default:
      return cart;
  }
};

export default reducer;