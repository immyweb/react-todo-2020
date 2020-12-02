import React from 'react';

import { ITodo } from '../../types/types';

import { TodoItem } from './styles';

interface IProps {
  todo: ITodo;
  index: number;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const Todo: React.FC<IProps> = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <TodoItem style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>✓</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </TodoItem>
  );
};

export default Todo;
