import { CHANGE_SCREEN } from 'types';

type State = {
  state: string | null;
};

type Handlers = {
  [CHANGE_SCREEN]: (state: State, { payload }: { payload: string }) => any;
  DEFAULT: (state: State) => any;
};

const handlers: Handlers = {
  [CHANGE_SCREEN]: (state, { payload }) => payload,
  DEFAULT: (state) => state,
};

const screenReducer = (state: any, action: any) => {
  const handler = handlers[action.type as 'CHANGE_SCREEN'] || handlers.DEFAULT;
  return handler(state, action);
};

export default screenReducer;
