import React from 'react';
import { useTodos } from '../hooks/useTodos';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import styles from '../styles/TodoApp.module.scss';

const TodoApp = () => {
    const { todos, addTodo, deleteTodo, toggleTodo, countTodos, countPendingTodos } = useTodos();

    const handleNewTodo = (description) => {
        addTodo(description);
    };

    return (
        <div className={styles.todoApp}>
            <h1>TodoApp <small>Total: {countTodos()} - Pendientes: {countPendingTodos()}</small></h1>
            <hr />
            <TodoForm onNewTodo={handleNewTodo} />
            <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} />
        </div>
    );
};

export default TodoApp;
