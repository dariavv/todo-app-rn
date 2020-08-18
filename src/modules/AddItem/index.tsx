import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import THEME from 'theme';

type AddItemProps = {
  addItem: (value: string) => void;
};

const AppTodo: React.FC<AddItemProps> = ({ addItem }) => {
  const [value, setValue] = useState<string>('');

  const pressHandler = () => {
    if (value.trim()) {
      addItem(value);
      setValue('');
      Keyboard.dismiss();
    } else {
      Alert.alert('Enter task name, please!');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="Add task"
        autoCorrect={false}
        autoCapitalize="none"
        maxLength={35}
      />
      <View style={styles.button}>
        <Button
          icon={<Icon name="add" size={20} color={THEME.WHITE_COLOR} />}
          buttonStyle={styles.buttonAdd}
          type="clear"
          onPress={pressHandler}
        />
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
    width: '75%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: THEME.TEXT_COLOR,
    color: THEME.TEXT_COLOR,
    fontFamily: 'BadScript-Regular',
  },
  button: {
    width: '13%',
  },
  buttonAdd: {
    color: THEME.WHITE_COLOR,
    backgroundColor: THEME.MAIN_COLOR,
  },
});

export default AppTodo;
