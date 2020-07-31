import {useState} from 'react';
import {ITodos} from 'interfases';

const useApp = () => {
  const [todos, setTodos] = useState<ITodos[]>([
    {id: '1', title: 'test'},
    {id: '2', title: 'test'},
    {id: '3', title: 'test'},
    {id: '4', title: 'test'},
    {id: '5', title: 'test'},
    {id: '6', title: 'test'},
    {id: '7', title: 'test'},
    {id: '8', title: 'test'},
    {id: '9', title: 'test'},
    {id: '10', title: 'test'},
  ]);

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
