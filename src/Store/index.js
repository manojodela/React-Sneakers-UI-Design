import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './Counter';

const store = configureStore({
    reducer: { counter: CounterReducer }
})

export default store; 