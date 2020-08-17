import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import TodoContext from 'context/todo/todoContext';
import ScreenContext from 'context/screen/screenContext';
import {
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  SHOW_LOADER,
  HIDE_LOADER,
  // SHOW_ERROR,
  // CLEAR_ERROR,
  FETCH_TODOS,
} from 'types';
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
    loading: false,
    error: null,
  };

  const { changeScreen } = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addItem = async (title: string) => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Error',
        `Minimum name length is 3 characters. ${
          title.trim().length
        } are too few!`,
      );
    } else {
      const response = await fetch(
        'https://ethereal-todo.firebaseio.com/todos.json',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title }),
        },
      );
      const data = await response.json();
      console.log('Data', data.name);
      dispatch({ type: ADD_ITEM, payload: { title, id: data.name } });
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
  const fetchTodos = async () => {
    showLoader();
    const response = await fetch(
      'https://ethereal-todo.firebaseio.com/todos.json',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    );
    const data = await response.json();
    console.log('Fetch Data', data);
    const todos = Object.keys(data).map((key: any) => ({
      ...data[key],
      id: key,
    }));
    // setTimeout(() => dispatch({ type: FETCH_TODOS, todos }), 5000);
    dispatch({ type: FETCH_TODOS, todos });
    hideLoader();
  };
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });

  // const showError = (error: any) => dispatch({ type: SHOW_ERROR, error });
  // const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addItem,
        updateItem,
        removeItem,
        fetchTodos,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
