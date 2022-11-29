import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './Dragons/characterSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
