import {useState} from 'react';
import {ITodo} from 'interfases';

const useApp = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {id: '1', title: 'Learn React Native'},
    {id: '2', title: 'Get on the Project'},
    {id: '3', title: 'Improve my English skills to C1 level'},
    {id: '4', title: 'Start learning Spanish'},
  ]);

  const addTodo = (title: string) => {
    const newTodo: any = {
      id: Date.now().toString(),
      title,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeItem = (id: string) => {
    setTodos((prevTodos: any[]) =>
      prevTodos.filter((item: any) => item.id !== id),
    );
  };

  return {todos, addTodo, removeItem};
};

export default useApp;
