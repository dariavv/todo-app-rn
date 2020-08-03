import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {ITodoScreenProps} from 'interfases';
import {THEME} from '../../theme';
import AppCard from '../../components/AppCard';

const TodoScreen: React.FC<ITodoScreenProps> = ({todo, goBack}) => {
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.text}>{todo.title}</Text>
        <Button
          title="Edit"
          color={THEME.MAIN_COLOR}
          onPress={() => console.log('Edit')}
        />
      </AppCard>
      <View style={styles.buttonsBlock}>
        <View style={styles.button}>
          <Button title="Back" color={THEME.MAIN_COLOR} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title="Remove"
            color={THEME.REMOVE_COLOR}
            onPress={() => console.log('Remove')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    padding: 8,
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
