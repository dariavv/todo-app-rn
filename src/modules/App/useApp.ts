import {useState} from 'react';
import {ITodo} from 'interfases';

const useApp = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {id: '1', title: 'Learn React Native'},
    {id: '2', title: 'Get on the Project'},
    {id: '3', title: 'Improve my English skills to C1 level'},
    {id: '4', title: 'Start learning Spanish'},
  ]);

  const [todoId, setTodoId] = useState<string | null>('1');

  const addItem = (title: string) => {
    const newTodo: any = {
      id: Date.now().toString(),
      title,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const openItem = (id: string) => setTodoId(id);

  const removeItem = (id: string) => {
    setTodos((prevTodos: any[]) =>
      prevTodos.filter((item: any) => item.id !== id),
    );
  };

  const goBack = () => setTodoId(null);

  return {todos, todoId, addItem, openItem, removeItem, goBack};
};

export default useApp;
