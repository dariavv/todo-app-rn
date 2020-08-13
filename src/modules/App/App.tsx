import React, { useState, useContext } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import Navbar from 'components/Navbar';
import MainScreen from 'screens/MainScreen';
import TodoScreen from 'screens/TodoScreen';
import TodoContext from 'context/todo/todoContext';

import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM } from 'types';
import { ITodo } from 'interfases';
import THEME from 'theme';

const App: React.FC = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const [todoId, setTodoId] = useState<string | null>(null);

  const selectedItem = todos.find((item: any) => item.id === todoId) || {
    id: '0',
    title: '',
  };

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
    const todoItem = todos.find((i: ITodo) => i.id === id);
    if (todoItem) {
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
              dispatch({ type: REMOVE_ITEM, payload: id });
              setTodoId(null);
            },
          },
        ],
        { cancelable: false },
      );
    }
  };

  const openItem = (id: string) => setTodoId(id);

  const goBack = () => setTodoId(null);

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.innerContainer}>
        {todoId ? (
          <TodoScreen
            todo={selectedItem}
            goBack={goBack}
            removeItem={removeItem}
            updateItem={updateItem}
          />
        ) : (
          <MainScreen
            todos={todos}
            addItem={addItem}
            openItem={openItem}
            removeItem={removeItem}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 120,
    backgroundColor: THEME.WHITE_COLOR,
  },
  innerContainer: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: THEME.PADDING_VERTICAL,
  },
});

export default App;
