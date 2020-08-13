import { createContext } from 'react';
import { ITodo } from 'interfases';

interface IContextProps {
  todos: ITodo[];
  addItem: (title: string) => void;
  updateItem: (id: string, title: string) => void;
  removeItem: (id: string) => void;
}

const TodoContext = createContext({} as IContextProps);

export default TodoContext;
