import React, { useContext, useEffect, useRef } from 'react';
import './Login.scss';
import { GiMountainCave } from 'react-icons/gi';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { nanoid } from 'nanoid';

const Login = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const [newName, handleName] = useInput('');

  const { createUser } = useContext(UserContext);

  const handleEnter = e => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!newName.trim()) return;

    createUser({ name: newName, id: nanoid() });
    navigate('/chat');
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <div className="login-container">
      <header>
        <span>la caverna</span>
        <GiMountainCave size="40" color="hsl(27, 67%, 45%)" />
      </header>
      <label htmlFor="msg-input">
        Nombre
        <input
          id="msg-input"
          value={newName}
          onChange={handleName}
          placeholder="Quipo Piroga..."
          ref={inputRef}
          onKeyDown={handleEnter}
        />
      </label>
      <button onClick={handleSubmit}>Entrar</button>
    </div>
  );
};

export default Login;
