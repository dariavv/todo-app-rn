/* eslint-disable no-param-reassign */
import {
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
  FETCH_TODOS,
} from 'types';
import { ITodo, ITodoReducer } from 'interfases';

type State = {
  todos: [{ id: string; title: string }];
  loading: any[];
  error: any[];
};

type Handlers = {
  [ADD_ITEM]: (
    state: State,
    { title, id }: { title: string; id: string },
  ) => any;
  [UPDATE_ITEM]: (state: State, { id, title }: any) => any;
  [REMOVE_ITEM]: (state: State, { id }: { id: string }) => any;
  [SHOW_LOADER]: (state: any, loading: boolean) => any;
  [HIDE_LOADER]: (state: any, loading: boolean) => any;
  [SHOW_ERROR]: (state: any, error: any) => any;
  [CLEAR_ERROR]: (state: any, error: any) => any;
  [FETCH_TODOS]: (state: any, { todos }: { todos: any }) => any;

  DEFAULT: (state: State) => any;
};

const handlers: Handlers = {
  [ADD_ITEM]: (state, { title, id }) => ({
    ...state,
    todos: [...state.todos, { id, title }],
  }),

  [UPDATE_ITEM]: (state, { id, title }) => ({
    ...state,
    todos: state.todos.map((item: ITodoReducer) => {
      if (item.id === id) {
        item.title = title;
      }
      return item;
    }),
  }),

  [REMOVE_ITEM]: (state, { id }) => ({
    ...state,
    todos: state.todos.filter((item: ITodo) => item.id !== id),
  }),

  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [HIDE_LOADER]: (state) => ({ ...state, loading: false }),
  [SHOW_ERROR]: (state, { error }) => ({ ...state, error }),
  [CLEAR_ERROR]: (state) => ({ ...state, error: null }),
  [FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),

  DEFAULT: (state) => state,
};

const todoReducer = (state: any, action: any) => {
  const handler =
    handlers[
      action.type as
        | 'ADD_ITEM'
        | 'UPDATE_ITEM'
        | 'REMOVE_ITEM'
        | 'SHOW_LOADER'
        | 'HIDE_LOADER'
        | 'CLEAR_ERROR'
        | 'SHOW_ERROR'
        | 'FETCH_TODOS'
    ] || handlers.DEFAULT;
  return handler(state, action);
};

export default todoReducer;
