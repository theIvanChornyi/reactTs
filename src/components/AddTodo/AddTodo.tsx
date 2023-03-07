import React, { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import { ITodos } from '../../types/todo';

interface IProps {
  handleAddTodo: (todo: ITodos) => void;
}
const AddTodo: React.FC<IProps> = ({ handleAddTodo }) => {
  const [title, setTitle] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      return;
    }
    handleAddTodo({ id: nanoid(), title: title });
    setTitle('');
    inputRef.current?.focus();
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div style={{ display: 'inline-block', marginRight: 10 }}>
        <label style={{ marginRight: 10 }} htmlFor="textInput">
          Write title
        </label>
        <input
          ref={inputRef}
          onChange={handleInputChange}
          name="title"
          type="text"
          id="textInput"
          value={title}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
export default AddTodo;
