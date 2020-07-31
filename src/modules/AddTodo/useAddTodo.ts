import {useState} from 'react';
import {Alert} from 'react-native';
import {IOnSubmit} from 'interfases';

const useAddTodo = ({onSubmit}: IOnSubmit) => {
  const [value, setValue] = useState<string>('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Error: write the name of task, please!');
    }
  };
  return {value, setValue, pressHandler};
};

export default useAddTodo;
