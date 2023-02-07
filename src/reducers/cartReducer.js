import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

const shoppingCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.findIndex(
      item => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
      state[itemIndex].quantity = state[itemIndex].quantity + 1;
      } else {
      state.push({ ...action.payload, quantity: 1 });
      }
      },
    plusQuantity (state, action)  {
      const index = state.findIndex(
        item => item.id === action.payload.id
      );
      state[index].quantity += 1;
    },
    minusQuantity (state, action) {
      const index = state.findIndex(
        item => item.id === action.payload.id
      );
      state[index].quantity -= 1;
    },
    emptyCart (state) {
      return state = [];
    }
  }
});

export const { addToCart, plusQuantity, minusQuantity, emptyCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
