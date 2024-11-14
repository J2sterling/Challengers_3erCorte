import React from 'react';
import TodoItem from './TodoItem';
import styles from '../styles/TodoList.module.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
    return (
        <ul className={styles.listGroup}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onToggleTodo={onToggleTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
