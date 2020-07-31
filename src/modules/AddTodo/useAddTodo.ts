import {useState} from 'react';
import {Alert} from 'react-native';
import {IAddTodoProps} from 'interfases';

const useAddTodo = ({addTodo}: IAddTodoProps) => {
  const [value, setValue] = useState<string>('');

  const pressHandler = () => {
    if (value.trim()) {
      addTodo(value);
      setValue('');
    } else {
      Alert.alert('Error: write the name of task, please!');
    }
  };
  return {value, setValue, pressHandler};
};

export default useAddTodo;
