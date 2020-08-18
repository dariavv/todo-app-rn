import React, { useReducer, useContext, useCallback } from 'react';
import { Alert } from 'react-native';
import TodoContext from 'context/todo/todoContext';
import ScreenContext from 'context/screen/screenContext';
import {
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
  FETCH_TODOS,
} from 'types';
import { ITodo } from 'interfases';
import { getData, addData, updateData, removeData } from 'database';
import todoReducer from './todoReducer';

const TodoState: React.FC = ({ children }) => {
  const initialState = {
    todos: [],
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
      clearError();
      try {
        const data = await addData(title);
        dispatch({ type: ADD_ITEM, title, id: data.name });
      } catch (error) {
        showError('Something went wrong, try again :)');
        Alert.alert('ERROR', `${error}`);
      }
    }
  };

  const updateItem = async (id: string, title: string) => {
    clearError();
    try {
      updateData(id, title);
      dispatch({ type: UPDATE_ITEM, id, title });
    } catch (error) {
      showError('Something went wrong, try again :)');
      Alert.alert('ERROR', `${error}`);
    }
  };

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
          onPress: async () => {
            changeScreen(null);
            clearError();
            try {
              removeData(id);
              dispatch({ type: REMOVE_ITEM, id });
            } catch (error) {
              showError('Something went wrong, try again :)');
              Alert.alert('ERROR', `${error}`);
            }
          },
        },
      ],
      { cancelable: false },
    );
  };

  const fetchTodos = useCallback(async () => {
    showLoader();
    clearError();
    try {
      const todos = await getData();
      dispatch({ type: FETCH_TODOS, todos });
    } catch (error) {
      showError('Something went wrong, try again :)');
      Alert.alert('ERROR', `${error}`);
    } finally {
      hideLoader();
    }
  }, []);

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });

  const showError = (error: any) => dispatch({ type: SHOW_ERROR, error });
  const clearError = () => dispatch({ type: CLEAR_ERROR });

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
