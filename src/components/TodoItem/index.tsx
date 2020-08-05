import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ITodo } from 'interfases';
import THEME from 'theme';

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: THEME.BORDER_COLOR,
    marginBottom: 10,
  },
});

type TodoItemProps = {
  todo: ITodo;
  openItem: (id: string) => void;
  removeItem: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, openItem, removeItem }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => openItem(todo.id)}
      onLongPress={() => removeItem(todo.id)}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
