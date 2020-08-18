import React from 'react';
import TodoState from 'context/todo/TodoState';
import ScreenState from 'context/screen/ScreenState';
import App from './App';

interface AppWrapperProps {}

const AppWrapper: React.FC<AppWrapperProps> = () => (
  <ScreenState>
    <TodoState>
      <App />
    </TodoState>
  </ScreenState>
);

export default AppWrapper;
