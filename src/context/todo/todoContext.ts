import { createContext } from 'react';
import { ITodo } from 'interfases';

interface IContextProps {
  todos: ITodo[];
  loading: boolean;
  error: string;
  addItem: (title: string) => void;
  updateItem: (id: string, title: string) => void;
  removeItem: (id: string) => void;
  fetchTodos: () => void;
}

const TodoContext = createContext({} as IContextProps);

export default TodoContext;
