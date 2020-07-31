import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import useAddTodo from './useAddTodo';
import {IAddTodoProps} from 'interfases';

const AppTodo: React.FC<IAddTodoProps> = ({addItem}) => {
  const {value, setValue, pressHandler} = useAddTodo({addItem});

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="Add task"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Add" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    padding: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: '#343A40',
    color: '#343A40',
  },
});

export default AppTodo;
