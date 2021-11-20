import React, { useState } from 'react';
import { nanoid } from 'nanoid'

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
  });

  const createUser = user => {
    setUser({...user });
  };

  return (
    <UserContext.Provider value={{ user, createUser }}>
      {children}
    </UserContext.Provider>
  );
};
