import { FC, lazy, Suspense, useState, useCallback, memo } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import { ITodos } from './types/todo';
const TodoList = lazy(() => import('./components/TodoList/TodoList'));

const App: FC = memo(() => {
  const [todos, setTodo] = useState<ITodos[]>([]);

  const handleAddTodo = useCallback((todo: ITodos) => {
    setTodo(p => [...p, todo]);
  }, []);
  const handleDeleteTodo = useCallback((id: ITodos['id']) => {
    setTodo(p => p.filter(todo => todo.id !== id));
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <h1>TODOS</h1>
        <AddTodo handleAddTodo={handleAddTodo} />
        <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
      </div>
    </Suspense>
  );
});

export default App;
