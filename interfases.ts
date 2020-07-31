export interface ITodos {
  id: string;
  title: string;
}

export interface IOnSubmit {
  onSubmit: (value: string) => void;
}
