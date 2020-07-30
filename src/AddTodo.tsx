import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

const AppTodo: React.FC<any> = ({onSubmit}) => {
  const [value, setValue] = useState<string>('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Error: write the name of task, please!');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="Add task"
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
