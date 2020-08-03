import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {ITodoScreenProps} from 'interfases';
import {THEME} from '../../theme';

const TodoScreen: React.FC<ITodoScreenProps> = ({todo, goBack}) => {
  return (
    <View>
      <Text style={styles.text}>{todo.title}</Text>
      <View style={styles.buttonsBlock}>
        <View style={styles.button}>
          <Button title="Back" color={THEME.MAIN_COLOR} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title="Remove"
            color={THEME.REMOVE_COLOR}
            onPress={() => console.log('To remove')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 20,
  },
  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
});

export default TodoScreen;
