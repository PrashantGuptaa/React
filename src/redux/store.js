import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './reducers';

export default configureStore({
    reducer: {
        counter: CounterReducer
    }
});