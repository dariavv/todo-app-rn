import React, { useReducer } from 'react';
import { CHANGE_SCREEN } from 'types';
import screenReducer from './screenReducer';

const ScreenState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(screenReducer, null);

  const changeScreen = (id: string | null) =>
    dispatch({ type: CHANGE_SCREEN, payload: id });

  return (
    <ScreenState.Provider value={{ todoId: state, changeScreen }}>
      {children}
    </ScreenState.Provider>
  );
};

export default ScreenState;
