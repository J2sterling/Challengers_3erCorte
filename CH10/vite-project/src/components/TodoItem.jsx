import React from 'react';
import styles from '../styles/TodoItem.module.scss';

const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className={`${styles.listGroupItem} d-flex justify-content-between align-items-center`}>
            <span
                onClick={() => onToggleTodo(todo.id)}
                className={`${styles.todoText} ${todo.done ? styles.completed : ''}`}
            >
                {todo.description}
            </span>
            <button
                className={styles.btnDanger}
                onClick={() => onDeleteTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    );
};

export default TodoItem;
