import { createSlice, nanoid } from "@reduxjs/toolkit";  // nanoid geneates the unique ids for each new todo we are creating

//  Step:1 Initial State of a todo
const initialState = {
    todos: [{ id: 1, content: "" }]
}

// Step : 2 --> Create a slice and then a reducers in that slice

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                content: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, content } = action.payload
            const todo = state.todos.find((todo) => todo.id === id)

            if (todo) {
                todo.content = content
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
