import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import AddTodo from '../../modules/AddTodo';
import TodoItem from '../../components/TodoItem';
import {IMainScreenProps} from 'interfases';

const MainScreen: React.FC<IMainScreenProps> = ({
  todos,
  addTodo,
  removeItem,
}) => {
  return (
    <View style={styles.block}>
      <AddTodo addTodo={addTodo} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({item}) => (
          <TodoItem todo={item} removeItem={removeItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default MainScreen;
