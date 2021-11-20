import { useEffect } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Login from './views/Login/Login';
import Chat from './views/Chat/Chat';
import { UserProvider } from './contexts/UserContext';
import socket from './services/socket';
import Notifications from './components/Notifications/Notifications';

function App() {
  useEffect(() => {
    return () => socket.off();
  }, [])

  return (
    <UserProvider>
      <div id="main-container">
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
      <Notifications />
    </UserProvider>
  );
}

export default App;
