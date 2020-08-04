import {useState} from 'react';
import {ITodo} from 'interfases';

type UseTodoScreenProps = {
  todo: ITodo;
  updateItem: (id: string, title: string) => void;
};

const useTodoScreen = ({todo, updateItem}: UseTodoScreenProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const saveItem = (title: string) => {
    updateItem(todo.id, title);
    setModalVisible(false);
  };

  return {modalVisible, setModalVisible, saveItem};
};

export default useTodoScreen;
