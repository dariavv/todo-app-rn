import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const AppTodo = () => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Add" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#343A40',
    color: '#343A40',
  },
});

export default AppTodo;
