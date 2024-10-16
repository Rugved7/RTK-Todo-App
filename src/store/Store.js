import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../reducers/todos/todoSlice.js"

export const store = configureStore({
    reducer: todoReducer  // Here we have given the access of reducers to the store. So now the store has all the information about the reducers
})