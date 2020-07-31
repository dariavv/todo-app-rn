import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const TodoItem: React.FC<any> = ({todo}) => {
  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
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
