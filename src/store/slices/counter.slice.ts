import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number;
}

const initialState: CounterState = Object.freeze({
  value: 0
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment (state) {
      state.value++
    },
    decrement (state) {
      state.value--
    },
    reset (state) {
      state.value = initialState.value
    },
    incrementByAmount (state, action: PayloadAction<number>) {
      state.value += action.payload
    }
  }
})

export const counterActions = counterSlice.actions
export default counterSlice.reducer
