export interface ITodo {
  id: string;
  title: string;
}

export interface ITodoItemProps {
  todo: ITodo;
  removeItem: (id: string) => void;
}

export interface IAddTodoProps {
  addTodo: (value: string) => void;
}

export interface IMainScreenProps {
  todos: ITodo[];
  addTodo: (title: string) => void;
  removeItem: (id: string) => void;
}
