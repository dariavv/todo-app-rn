import {useState} from 'react';
import {ITodos} from 'interfases';

const useApp = () => {
  const [todos, setTodos] = useState<ITodos[]>([]);

  const addTodo = (title: any) => {
    const newTodo: any = {
      id: Date.now().toString(),
      title,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return {todos, addTodo};
};

export default useApp;
