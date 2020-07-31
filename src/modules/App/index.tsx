import React from 'react';
import {StyleSheet, View} from 'react-native';
import Navbar from '../../components/Navbar';
import AddTodo from '../AddTodo';
import TodoItem from '../../components/TodoItem';
import useApp from './useApp';

const App: React.FC<any> = () => {
  const {todos, addTodo} = useApp();

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id}>
              {todo.title}
            </TodoItem>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default App;
