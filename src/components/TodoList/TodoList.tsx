import React from 'react';
import { ITodos } from '../../types/todo';

interface IProps {
  todos: ITodos[];
  handleDeleteTodo: (id: ITodos['id']) => void;
}

const TodoList: React.FC<IProps> = ({ todos, handleDeleteTodo }) => {
  const onHandleCkick = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.getAttribute('data-id');
    if (id) {
      handleDeleteTodo(id);
    }
  };
  return (
    <ul>
      {todos.map(({ id, title }) => (
        <li onClick={onHandleCkick} data-id={id} key={id}>
          {title}
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
