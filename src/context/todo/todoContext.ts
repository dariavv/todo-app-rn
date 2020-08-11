import { createContext } from 'react';

interface IContextProps {}

const TodoContext = createContext({} as IContextProps);

export default TodoContext;
