import React, { useReducer } from 'react';
import { CHANGE_SCREEN } from 'types';
import screenReducer from './screenReducer';
import ScreenContext from './screenContext';

const ScreenState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(screenReducer, null);

  const changeScreen = (id: string | null) =>
    dispatch({ type: CHANGE_SCREEN, payload: id });

  return (
    <ScreenContext.Provider value={{ todoId: state, changeScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenState;
