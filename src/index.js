import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'
import App from './App';

import productReducer from './reducers/productReducer'

import cartReducer from './reducers/cartReducer'

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
