import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { ITodo } from 'interfases';
import THEME from 'theme';
import AppCard from 'components/AppCard';
import EditModal from 'modules/EditModal';
import TodoContext from 'context/todo/todoContext';
import ScreenContext from 'context/screen/screenContext';

const TodoScreen: React.FC = () => {
  const { todos, updateItem, removeItem } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);

  const [modalVisible, setModalVisible] = useState(false);

  const todo = todos.find((item: ITodo) => item.id === todoId) || {
    id: '0',
    title: '',
  };

  const saveItem = async (title: string) => {
    await updateItem(todo.id, title);
    setModalVisible(false);
  };

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
          icon={<Icon name="edit" size={20} color={THEME.WHITE_COLOR} />}
          buttonStyle={styles.buttonEdit}
          type="solid"
          onPress={() => setModalVisible(true)}
        />
      </AppCard>
      <View style={styles.buttonsBlock}>
        <View style={styles.button}>
          <Button
            icon={
              <Icon
                name="back"
                size={20}
                color={THEME.WHITE_COLOR}
                style={styles.icon}
              />
            }
            buttonStyle={styles.buttonBack}
            title="Back"
            type="solid"
            onPress={() => changeScreen(null)}
          />
        </View>
        <View style={styles.button}>
          <Button
            icon={
              <Icon
                name="delete"
                size={20}
                color={THEME.WHITE_COLOR}
                style={styles.icon}
              />
            }
            buttonStyle={styles.buttonDelete}
            title="Delete"
            type="solid"
            onPress={() => removeItem(todo.id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: 'BadScript-Regular',
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
  buttonEdit: {
    paddingHorizontal: 10,
    color: THEME.WHITE_COLOR,
    backgroundColor: THEME.MAIN_COLOR,
  },
  buttonBack: {
    color: THEME.WHITE_COLOR,
    backgroundColor: THEME.MAIN_COLOR,
  },
  buttonDelete: {
    color: THEME.WHITE_COLOR,
    backgroundColor: THEME.REMOVE_COLOR,
  },
  icon: {
    paddingRight: 5,
  },
});

export default TodoScreen;
