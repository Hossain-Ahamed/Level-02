import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from './features/todoSlice'
export const store = configureStore({
    reducer: {
        todos: toDoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch