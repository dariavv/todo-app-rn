import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import useAddItem from './useAddItem';
import {THEME} from 'src/theme';

type AddItemProps = {
  addItem: (value: string) => void;
};

const AppTodo: React.FC<AddItemProps> = ({addItem}) => {
  const {value, setValue, pressHandler} = useAddItem({addItem});

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="Add task"
        autoCorrect={false}
        autoCapitalize="none"
        maxLength={64}
      />
      <View style={styles.button}>
        <Button title="+ Add" color={THEME.MAIN_COLOR} onPress={pressHandler} />
      </View>
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
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: THEME.TEXT_COLOR,
    color: THEME.TEXT_COLOR,
  },
  button: {
    width: '20%',
  },
});

export default AppTodo;
