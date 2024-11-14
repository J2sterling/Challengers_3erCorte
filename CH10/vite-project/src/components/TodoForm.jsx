// TodoForm.jsx
import React, { useState } from 'react';
import styles from '../styles/TodoForm.module.scss';

const TodoForm = ({ onNewTodo }) => {
    const [description, setDescription] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (description.trim().length > 0) {
            onNewTodo(description);
            setDescription('');
        }
    };

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <input
                type="text"
                placeholder="Agregar tarea"
                className={styles.formControl}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className={styles.btn}>Agregar</button>
        </form>
    );
};

export default TodoForm;
