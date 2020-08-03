import {useState} from 'react';
import {Alert} from 'react-native';
import {ITodo} from 'interfases';

const useApp = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {id: '1', title: 'Learn React Native'},
    {id: '2', title: 'Get on the Project'},
    {id: '3', title: 'Improve my English skills to C1 level'},
    {id: '4', title: 'Start learning Spanish'},
  ]);

  const [todoId, setTodoId] = useState<string | null>(null);

  const addItem = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now().toString(),
      title,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const openItem = (id: string) => setTodoId(id);

  const removeItem = (id: string) => {
    const todoItem = todos.find((i: ITodo) => i.id === id);
    Alert.alert(
      'Delete item',
      `Are you sure you want to delete ${todoItem?.title}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            setTodoId(null);
            setTodos((prevTodos: ITodo[]) =>
              prevTodos.filter((item: ITodo) => item.id !== id),
            );
          },
        },
      ],
      {cancelable: false},
    );
  };

  const goBack = () => setTodoId(null);

  return {todos, todoId, addItem, openItem, removeItem, goBack};
};

export default useApp;
