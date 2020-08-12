/* eslint-disable no-param-reassign */
import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM } from 'types';
import { ITodo } from 'interfases';

const todoReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todos: [
          ...state.todo,
          { id: Date.now().toString(), title: action.title },
        ],
      };
    case UPDATE_ITEM:
      return {
        ...state,
        todos: state.todos.map((item: ITodo) => {
          if (item.id === action.id) {
            item.title = action.title;
          }
          return item;
        }),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        todos: state.todos.filter((item: ITodo) => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default todoReducer;
