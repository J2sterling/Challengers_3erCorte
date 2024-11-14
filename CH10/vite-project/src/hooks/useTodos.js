// hooks/useTodos.js
import { useReducer, useEffect } from 'react';
import { TodoReducer } from '../reducers/TodoReducer';
import { saveTodosToLocalStorage, getTodosFromLocalStorage } from '../utils/localStorageUtils';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../types/types';

const init = () => {
    return getTodosFromLocalStorage();
};

export const useTodos = () => {
    const [todos, dispatch] = useReducer(TodoReducer, [], init);

    useEffect(() => {
        saveTodosToLocalStorage(todos);
    }, [todos]);

    const addTodo = (description) => {
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };
        dispatch({ type: ADD_TODO, payload: newTodo });
    };

    const deleteTodo = (id) => {
        dispatch({ type: DELETE_TODO, payload: id });
    };

    const toggleTodo = (id) => {
        dispatch({ type: TOGGLE_TODO, payload: id });
    };

    const countTodos = () => todos.length;

    const countPendingTodos = () => todos.filter(todo => !todo.done).length;

    return {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        countTodos,
        countPendingTodos
    };
};
