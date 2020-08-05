import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { ITodo } from 'interfases';
import THEME from 'theme';
import AppCard from 'components/AppCard';
import EditModal from 'modules/EditModal';
import useTodoScreen from './useTodoScreen';

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

type TodoScreenProps = {
  todo: ITodo;
  goBack: () => void;
  removeItem: (id: string) => void;
  updateItem: (id: string, title: string) => void;
};

const TodoScreen: React.FC<TodoScreenProps> = ({
  todo,
  goBack,
  removeItem,
  updateItem,
}) => {
  const { modalVisible, setModalVisible, saveItem } = useTodoScreen({
    todo,
    updateItem,
  });

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modalVisible}
        setVisible={() => setModalVisible(false)}
        saveItem={saveItem}
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

export default TodoScreen;
