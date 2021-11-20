import socketIOClient from 'socket.io-client';

export default socketIOClient('https://nameless-crag-24110.herokuapp.com/', {
  withCredentials: false,
  transportOptions: {
    polling: {
      extraHeaders: {
        chat_app: 'abcd',
      },
    },
  },
});
