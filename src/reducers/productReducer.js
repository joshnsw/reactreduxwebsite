import { createSlice } from '@reduxjs/toolkit'


const initialState = [
  {
    name: '8lbs Weight',
    price: 990,
    id: 1,
  },
  {
    name: 'Kickboxing Gloves',
    price: 200,
    id: 2,
  },
  {
    name: 'HeadGear',
    price: 400,
    id: 3,
  },
  {
    name: 'Protein X',
    price: 400,
    id: 4,
  },
  {
    name: 'Creatine',
    price: 100,
    id: 5,
  },
  {
    name: 'Gym boss shirt',
    price: 100,
    id: 6,
  },
  {
    name: 'Athletic Shorts',
    price: 130,
    id: 7,
  },
  {
    name: 'Caffine pills',
    price: 350,
    id: 8,
  },
  {
    name: 'Protein bar',
    price: 10,
    id: 9,
  },
]



const productSlice = createSlice({
  name: 'products',
  initialState
})










export default productSlice.reducer
