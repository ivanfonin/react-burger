export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_CLOSE = 'WS_CONNECTION_CLOSE';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';

export const wsConnectionStart = (url) => {
  console.log('start ws connection:', url);
  return {
    type: WS_CONNECTION_START,
    payload: url,
  };
};

export const wsConnectionSuccess = () => {
  console.log('connection started');
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionClose = () => {
  console.log('connection close');
  return {
    type: WS_CONNECTION_CLOSE,
  };
};

export const wsConnectionClosed = () => {
  console.log('connection closed');
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const wsConnectionError = () => {
  console.log('connection error');
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsGetMessage = (message) => {
  return {
    type: WS_GET_MESSAGE,
    payload: message,
  };
};
