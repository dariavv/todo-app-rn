import {useState} from 'react';

const useTodoScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return {modalVisible, setModalVisible};
};

export default useTodoScreen;
