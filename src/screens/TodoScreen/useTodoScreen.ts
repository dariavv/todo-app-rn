import {useState} from 'react';

const useTodoScreen = () => {
  const [modal, setModal] = useState<boolean>(false);

  return {modal, setModal};
};

export default useTodoScreen;
