import React, { useEffect, useState } from 'react';
import socket from '../services/socket';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('user_list', users => {
        setUsers(users);
    });

    socket.on('user_disconnect', users => {
        setUsers(users);
    });
  }, []);

  return (
    <div>
      <span>conectados ({users.length})</span>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
