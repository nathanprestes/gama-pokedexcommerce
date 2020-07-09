import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  products: [],
};

export const { Types, Creators } = createActions({
  addProduct: ['products'],
  reset: [],
  incrementQuantity: ['products'],
  decrementQuantity: ['products'],
});

const addProduct = (state = INITIAL_STATE, action) => ({
  ...state,
  products:[ ...state.products, action.products]
});

const incrementQuantity = (state = INITIAL_STATE, action) => ({
    ...state,
    products:[action.products]
})

const decrementQuantity = (state = INITIAL_STATE, action) => ({
  ...state,
  products:[action.products]
})


const reset = (state = INITIAL_STATE) => ({ ...INITIAL_STATE });


export default createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT]: addProduct,
  [Types.RESET]: reset,
  [Types.INCREMENT_QUANTITY]: incrementQuantity,
  [Types.DECREMENT_QUANTITY]: decrementQuantity,
});
