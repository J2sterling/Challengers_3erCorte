import React, { useState } from 'react';
import styles from '../styles/TodoForm.module.scss';

const TodoForm = ({ handleAddTodo }) => {
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length > 0) {
            handleAddTodo(description);
            setDescription('');
        }
    };

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <input
                type="text"
                placeholder="Agregar TODO"
                className={styles.formControl}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className={styles.btn}>
                Agregar
            </button>
        </form>
    );
};

export default TodoForm;
