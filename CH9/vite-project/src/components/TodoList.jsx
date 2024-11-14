import React from 'react';
import styles from '../styles/TodoList.module.scss';

const TodoList = ({ todos, handleDeleteTodo }) => {
    return (
        <ul className={styles.listGroup}>
            {todos.map((todo) => (
                <li key={todo.id} className={styles.listGroupItem}>
                    <span>{todo.description}</span>
                    <button
                        className={styles.btnDanger}
                        onClick={() => handleDeleteTodo(todo.id)}
                    >
                        Borrar
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
