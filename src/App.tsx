import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Navbar from './Navbar';
import AddTodo from './AddTodo';
import Todo from './Todo';

type Todos = {
  id: string;
  title: string;
};

const App: React.FC<any> = () => {
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodo = (title: any) => {
    const newTodo: any = {
      id: Date.now().toString(),
      title,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id}>
              {todo.title}
            </Todo>
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
