import { REMOVE_FROM_CART, ADD_TO_CART, SET_ITEMS_LIST } from '../constants/actionTypes';


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
        cart: [ ...state.cart, action.payload ], 
      };

    case REMOVE_FROM_CART:
      console.log(state.cart)
      console.log(action.payload)

      return {
        items : [ ...state.items ],
        cart: [
          ...state.cart.slice(0, action.payload.index),
          ...state.cart.slice(action.payload.index + 1)
        ],
    }

    default:
      return {
        ...state
      };
  }
};

export default reducer;