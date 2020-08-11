import { createContext } from 'react';
import { ITodo } from 'interfases';

interface IContextProps {
  todos: ITodo[];
  dispatch: React.Dispatch<any>;
}

const TodoContext = createContext({} as IContextProps);

export default TodoContext;
