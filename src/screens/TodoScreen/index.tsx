import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {ITodoScreenProps} from 'interfases';
import {THEME} from '../../theme';
import AppCard from '../../components/AppCard';
// import useTodoScreen from './useTodoScreen';
import EditModal from '../../components/EditModal';

const TodoScreen: React.FC<ITodoScreenProps> = ({todo, goBack, removeItem}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <EditModal
        visible={modalVisible}
        setVisible={() => setModalVisible(false)}
      />
      <AppCard style={styles.card}>
        <Text style={styles.text}>{todo.title}</Text>
        <Button
          title="Edit"
          color={THEME.MAIN_COLOR}
          onPress={() => setModalVisible(true)}
        />
      </AppCard>
      <View style={styles.buttonsBlock}>
        <View style={styles.button}>
          <Button title="Back" color={THEME.MAIN_COLOR} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title="Delete"
            color={THEME.REMOVE_COLOR}
            onPress={() => removeItem(todo.id)}
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
    padding: 10,
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
