import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../types/types';

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        case TOGGLE_TODO:
            return state.map(todo => 
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        default:
            return state;
    }
};
