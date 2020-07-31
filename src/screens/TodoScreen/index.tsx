import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {ITodoScreenProps} from 'interfases';

const TodoScreen: React.FC<ITodoScreenProps> = ({todo, goBack}) => {
  return (
    <View style={styles.block}>
      <Text>{todo.title}</Text>
      <Button title="Back" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default TodoScreen;
