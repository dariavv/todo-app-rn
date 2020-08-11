import React, { useReducer } from 'react';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';

const TodoState: React.FC<any> = ({ children }) => {
  const initialState = {
    todos: [
      { id: '1', title: 'Learn React Native' },
      { id: '2', title: 'Get on the Project' },
      { id: '3', title: 'Improve my English skills to C1 level' },
      { id: '4', title: 'Start learning Spanish' },
    ],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ todos: state.todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
