import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../slices/userSlice';
import { useReducer } from 'react';

const store = configureStore({
    reducer: {
        userInfo: userReducer,
    }
});

export default store;