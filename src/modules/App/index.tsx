import React from 'react';
import TodoState from 'context/todo/TodoState';
import App from './App';

interface AppWrapperProps {}

const AppWrapper: React.FC<AppWrapperProps> = () => (
  <TodoState>
    <App />
  </TodoState>
);

export default AppWrapper;
