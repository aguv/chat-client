import { useState } from 'react';

const useInput = init => {
  const [input, setInput] = useState(() => init);

  const handleInput = e => setInput(e.target.value);

  const cleanInput = () => setInput('');

  return [input, handleInput, cleanInput];
};

export default useInput;
