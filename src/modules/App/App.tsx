/* eslint-disable no-param-reassign */
import React, { useState, useContext } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Navbar from 'components/Navbar';
import MainScreen from 'screens/MainScreen';
import TodoScreen from 'screens/TodoScreen';
import THEME from 'theme';
import { ITodo } from 'interfases';
import TodoContext from 'context/todo/todoContext';

const App: React.FC = () => {
  const todoContext = useContext(TodoContext);
  const [todos, setTodos] = useState<ITodo[]>([]);

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
      const newTodo: ITodo = {
        id: Date.now().toString(),
        title,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  };

  const openItem = (id: string) => setTodoId(id);

  const updateItem = (id: string, title: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) => {
        if (item.id === id) {
          item.title = title;
        }
        return item;
      }),
    );
  };

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
              setTodoId(null);
              setTodos((prevTodos: ITodo[]) =>
                prevTodos.filter((item: ITodo) => item.id !== id),
              );
            },
          },
        ],
        { cancelable: false },
      );
    }
  };

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
            todos={todoContext.todos}
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
