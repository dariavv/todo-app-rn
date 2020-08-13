import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import TodoContext from 'context/todo/todoContext';
import ScreenContext from 'context/screen/screenContext';
import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM } from 'types';
import { ITodo } from 'interfases';
import todoReducer from './todoReducer';

const TodoState: React.FC = ({ children }) => {
  const initialState = {
    todos: [
      { id: '1', title: 'Learn React Native' },
      { id: '2', title: 'Get on the Project' },
      { id: '3', title: 'Improve my English skills to C1 level' },
      { id: '4', title: 'Start learning Spanish' },
    ],
  };

  const { changeScreen } = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addItem = (title: string) => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Error',
        `Minimum name length is 3 characters. ${
          title.trim().length
        } are too few!`,
      );
    } else {
      dispatch({ type: ADD_ITEM, payload: title });
    }
  };

  const updateItem = (id: string, title: string) =>
    dispatch({ type: UPDATE_ITEM, payload: { id, title } });

  const removeItem = (id: string) => {
    const todoItem = state.todos.find((item: ITodo) => item.id === id);
    Alert.alert(
      'Delete item',
      `Are you sure you want to delete ${todoItem?.title}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            changeScreen(null);
            dispatch({ type: REMOVE_ITEM, payload: id });
          },
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addItem, updateItem, removeItem }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
