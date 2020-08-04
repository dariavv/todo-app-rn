import {useState} from 'react';
import {Alert} from 'react-native';

type UseEditModalProps = {
  value: string;
  saveItem: (title: string) => void;
};

const useEditModal = ({value, saveItem}: UseEditModalProps) => {
  const [title, setTitle] = useState<string>(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Error',
        `Minimum name length is 3 characters. ${
          title.trim().length
        } are too few!`,
      );
    } else {
      saveItem(title);
    }
  };
  return {title, setTitle, saveHandler};
};

export default useEditModal;
