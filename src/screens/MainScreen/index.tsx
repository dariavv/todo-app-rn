import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import AddTodo from '../../modules/AddItem';
import TodoItem from '../../components/TodoItem';
import {IMainScreenProps} from 'interfases';

const MainScreen: React.FC<IMainScreenProps> = ({
  todos,
  addItem,
  openItem,
  removeItem,
}) => {
  return (
    <View style={styles.block}>
      <AddTodo addItem={addItem} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({item}) => (
          <TodoItem todo={item} openItem={openItem} removeItem={removeItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default MainScreen;
