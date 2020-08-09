import { useState } from 'react';
import { Alert, Keyboard } from 'react-native';

type UseAddItemProps = {
  addItem: (value: string) => void;
};

const useAddItem = ({ addItem }: UseAddItemProps) => {
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
  return { value, setValue, pressHandler };
};

export default useAddItem;
