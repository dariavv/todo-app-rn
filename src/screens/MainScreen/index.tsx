import React from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import AddTodo from 'modules/AddItem';
import TodoItem from 'components/TodoItem';
import { ITodo } from 'interfases';

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
      {todos.length ? (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (
            <TodoItem todo={item} openItem={openItem} removeItem={removeItem} />
          )}
        />
      ) : (
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/empty.jpg')}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '45%',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default MainScreen;
