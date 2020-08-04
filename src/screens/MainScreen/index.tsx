import React from 'react';
import {View, FlatList} from 'react-native';
import AddTodo from 'src/modules/AddItem';
import TodoItem from 'src/components/TodoItem';
import {ITodo} from 'interfases';

type MainScreenProps = {
  todos: ITodo[];
  addItem: (title: string) => void;
  openItem: (id: string) => void;
  removeItem: (id: string) => void;
};

const MainScreen: React.FC<MainScreenProps> = ({
  todos,
  addItem,
  openItem,
  removeItem,
}) => {
  return (
    <View>
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

export default MainScreen;
