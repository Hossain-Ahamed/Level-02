import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
    id: string;
    title: string,
    description: string,
    isCompleted: boolean
}
type TinitialState = {
    todos: TTodo[]
}
const initialState: TinitialState = {
    todos: [],
};


const todoSlice = createSlice({
    name: 'ToDo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Omit<TTodo, 'isCompleted' | 'id'>>) => {

            const data: TTodo = {
                ...action.payload,
                isCompleted: false,
                id: Math.random().toString(36).substring(2, 7)
            }
            state.todos.push(data)
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            // state.todos = state.todos.filter(item => item.id !== action.payload)
            state.todos.splice(state.todos.findIndex(Item => Item.id === action.payload), 1)
        },
        toggleComplete: (state, action: PayloadAction<string>) => {
            const notCompletedTodos: TTodo[] = [];
            const completedTodos: TTodo[] = [];
            
            state.todos.forEach(todo => {
                if (todo.id === action.payload) {
                    // Toggle isCompleted
                    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
                    (updatedTodo.isCompleted ? completedTodos : notCompletedTodos).push(updatedTodo);
                } else {
                    (todo.isCompleted ? completedTodos : notCompletedTodos).push(todo);
                }
            });
        
            // Assign the reordered array back to state.todos
            state.todos = [...notCompletedTodos, ...completedTodos];
        }
        
    }

});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;