import {useState} from 'react';
import {Alert} from 'react-native';
import {IAddTodoProps} from 'interfases';

const useAddTodo = ({addItem}: IAddTodoProps) => {
  const [value, setValue] = useState<string>('');

  const pressHandler = () => {
    if (value.trim()) {
      addItem(value);
      setValue('');
    } else {
      Alert.alert('Enter task name, please!');
    }
  };
  return {value, setValue, pressHandler};
};

export default useAddTodo;
