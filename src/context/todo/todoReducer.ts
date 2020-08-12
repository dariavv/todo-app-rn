import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM } from 'types';
import { ITodo, ITodoReducer } from 'interfases';

type State = {
  todos: [{ id: string; title: string }];
};

type Handlers = {
  [ADD_ITEM]: (state: State, { payload }: { payload: string }) => any;
  [UPDATE_ITEM]: (
    state: State,
    {
      payload: { id, title },
    }: any,
  ) => any;
  [REMOVE_ITEM]: (state: State, { payload }: { payload: string }) => any;

  DEFAULT: (state: State) => any;
};

const handlers: Handlers = {
  [ADD_ITEM]: (state, { payload }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), title: payload }],
  }),

  [UPDATE_ITEM]: (state, { payload: { id, title } }) => ({
    ...state,
    todos: state.todos.map((item: ITodoReducer) => {
      if (item.id === id) {
        return { ...item, title };
      }
      return item;
    }),
  }),

  [REMOVE_ITEM]: (state, { payload }) => ({
    ...state,
    todos: state.todos.filter((item: ITodo) => item.id !== payload),
  }),

  DEFAULT: (state) => state,
};

const todoReducer = (state: any, action: any) => {
  const handler =
    handlers[action.type as 'ADD_ITEM' | 'UPDATE_ITEM' | 'REMOVE_ITEM'] ||
    handlers.DEFAULT;
  return handler(state, action);
};

export default todoReducer;
