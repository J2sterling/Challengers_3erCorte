import React, { useReducer, useState } from 'react';
import { TodoReducer } from '../reducers/Todoreducer.js';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import styles from '../styles/TodoApp.module.scss';

const initialState = [
    { id: 1, description: 'Hacer los challenges', done: false }
];

export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

    const handleAddTodo = (description) => {
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };
        dispatchTodo({ type: 'ADD_TODO', payload: newTodo });
    };

    const handleDeleteTodo = (id) => {
        dispatchTodo({ type: 'REMOVE_TODO', payload: id });
    };

    return (
        <div className={styles.todoApp}>
            <h1>TodoApp</h1>
            <hr />
            <TodoForm handleAddTodo={handleAddTodo} />
            <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
        </div>
    );
};
