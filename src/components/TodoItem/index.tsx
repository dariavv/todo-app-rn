import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const TodoItem: React.FC<any> = ({todo, onRemove}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log('Pressed', todo.id)}
      onLongPress={() => onRemove(todo.id)}>
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
