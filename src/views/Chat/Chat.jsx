import React, { useEffect, useContext } from 'react';
import './Chat.scss';
import socket from '../../services/socket';
import { Navigate } from 'react-router-dom';
import Messages from '../../components/Messages';
import Users from '../../components/Users';
import NewMessage from '../../components/NewMessage';
import { UserContext } from '../../contexts/UserContext';

const Chat = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.name) {
      socket.emit('user_join', { user });
    }
  }, [user]);

  return user.name ? (
    <div className="chat-container">
      <div>
        <span>mensajes</span>
        <Messages />
        <NewMessage />
      </div>
      <Users />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Chat;
