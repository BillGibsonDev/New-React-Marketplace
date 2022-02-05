import { REMOVE_FROM_CART, ADD_TO_CART, LOAD_CART } from '../constants/actionTypes';

const initialState = {
 items: [],
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
       items: [ ...state.items, action.payload ],
      };

    case REMOVE_FROM_CART:{
      return { items: [...state.items = state.items.filter((item) => item.id !== action.payload.id)]
    }
  }

    case LOAD_CART: {
      return {
        ...state,
       product: action.payload
      };
    }

    default:
      return {
        ...state
      };
  }
};

export default reducer;