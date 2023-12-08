///برای همبگر منو بالای ساید بار  است و تحوه عملکرد ان را پیاده سازی می کند
import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = configureStore({reducer:changeState})
export default store
