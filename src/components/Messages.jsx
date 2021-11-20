import React, { useState, useEffect, useRef, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import socket from '../services/socket';

const Message = ({ message: { text, name, time, userId } }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <p>{text}</p>
      <footer>
        <span className={userId === user.id ? 'my-message' : 'another-message'}>
          {userId === user.id ? 'me' : name}
        </span>
        <span>{time}</span>
      </footer>
    </div>
  );
};

const Messages = () => {
  const messageRef = useRef(null);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat_message', message => {
      setMessages(messages => [...messages, message]);
    });

    if (messageRef) {
      messageRef.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <div className="messages-container" ref={messageRef}>
      {messages.map(message => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default Messages;
