import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Navbar from '../../components/Navbar';
import AddTodo from '../AddTodo';
import TodoItem from '../../components/TodoItem';
import useApp from './useApp';

const App: React.FC<any> = () => {
  const {todos, addTodo, removeItem} = useApp();

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.innerContainer}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({item}) => (
            <TodoItem todo={item} onRemove={removeItem} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 120,
  },
  innerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default App;
