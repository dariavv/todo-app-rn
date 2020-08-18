import { createContext } from 'react';

interface IScreenContextProps {
  todoId: string | null;
  changeScreen: (id: string | null) => void;
}

const ScreenContext = createContext({} as IScreenContextProps);

export default ScreenContext;
