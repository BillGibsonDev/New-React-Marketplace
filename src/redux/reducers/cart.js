import { REMOVE_FROM_CART, ADD_TO_CART, SET_ITEMS_LIST, ADJUST_ITEM_QTY } from '../constants/actionTypes';


const initialState = {
  items: [],
  cart: [],
}
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_ITEMS_LIST:
      return {
        ...state,
          items: action.payload,
          cart: []
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [ ...state.cart, {...action.payload, qty: 1} ], 
      };

    case REMOVE_FROM_CART:
      return {
        items : [ ...state.items ],
        cart: [
          ...state.cart.slice(0, action.payload.index),
          ...state.cart.slice(action.payload.index + 1)
        ],
    }
    case ADJUST_ITEM_QTY:
      return {
        items: [...state.items],
        cart: state.cart.map((product) =>
          product.product.id === action.payload.id
            ? { ...product, qty: action.payload.qty }
            : product
        ),
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;