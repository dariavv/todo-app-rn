import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ITodoItemProps} from 'interfases';

const TodoItem: React.FC<ITodoItemProps> = ({todo, removeItem}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log('Pressed', todo.id)}
      onLongPress={() => removeItem(todo.id)}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ececec',
    marginBottom: 10,
  },
});

export default TodoItem;
