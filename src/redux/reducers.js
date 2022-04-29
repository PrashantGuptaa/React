import { createSlice } from '@reduxjs/toolkit';

// const [myState, setMyState] = useState(0) -> 1
// 

const counterIntialState = {
    currentCounter: 0,
    randomValue: 1,
}
const counterSlice = createSlice({
    name: 'counter', // name of the reducer
    initialState: counterIntialState, // need to give some initial state, to get it started
    reducers: { // reducers interact direclty with store
        increment: (state) => {
            state.currentCounter = state.currentCounter + 1;
            state.randomValue = Math.random();
        },
        decrement: (state) => {
            state.currentCounter = state.currentCounter - 1;
            state.randomValue = Math.random();

        },
        incrementByValue: (state, action, random) => {
            console.log(random);
            state.currentCounter = state.currentCounter + action.payload.value;
            state.randomValue = action.payload.random;
        }
    }
});

// cc -> 1

const { increment, decrement, incrementByValue } = counterSlice.actions;

const selectCounter = (state) => state.counter.currentCounter;

export  {
    increment,
    decrement,
    incrementByValue,
    selectCounter,
}

export default counterSlice.reducer;







