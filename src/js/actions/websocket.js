import * as config from './../../config';
import * as types from './actionTypes';

let socket;

export const init = store => {
  socket = new WebSocket(config.ws);

  socket.onopen = () => {
    socket.send(JSON.stringify({
      '$type': 'login',
      'username': 'user1234',
      'password': 'password1234'
    }));

    socket.send(JSON.stringify({$type: types.SUBSCRIBE}));
    store.dispatch({type: types.SUBSCRIBE});
  };

  socket.onmessage = (message) => {
    const {$type: type, ...payload} = JSON.parse(message.data);

    store.dispatch({type, payload});
  };
};

export const emit = (payload) => {
  socket.send(JSON.stringify(payload));
};
