import React, { useContext, useEffect, useRef } from 'react';
import { UserContext } from '../contexts/UserContext';
import useInput from '../hooks/useInput';
import socket from '../services/socket';

const NewMessage = () => {
  const inputRef = useRef(null);
  const { user } = useContext(UserContext);
  const [input, handleInput, cleanInput] = useInput('');

  const sendMessage = (text, name) => {
    socket.emit('chat_message', { text, name });
    cleanInput();
  };

  const handleEnter = (text, name) => e => {
    if (e.key === 'Enter') {
        sendMessage(text, name);
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [input, inputRef]);

  return (
    <div className="input-button">
      <input
        value={input}
        onChange={handleInput}
        placeholder="Mensaje..."
        ref={inputRef}
        onKeyDown={handleEnter(input, user.name)}
      />
      <button onClick={() => sendMessage(input, user.name)}>Enviar</button>
    </div>
  );
};

export default NewMessage;
