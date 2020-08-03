export interface ITodo {
  id: string;
  title: string;
}

export interface ITodoItemProps {
  todo: ITodo;
  openItem: (id: string) => void;
  removeItem: (id: string) => void;
}

export interface IAddTodoProps {
  addItem: (value: string) => void;
}

export interface IMainScreenProps {
  todos: ITodo[];
  addItem: (title: string) => void;
  openItem: (id: string) => void;
  removeItem: (id: string) => void;
}

export interface ITodoScreenProps {
  todo: ITodo;
  goBack: () => void;
  removeItem: (id: string) => void;
}
