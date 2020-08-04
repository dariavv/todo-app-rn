export interface ITodo {
  id: string;
  title: string;
}

export interface IAddTodoProps {
  addItem: (value: string) => void;
}
