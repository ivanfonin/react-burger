export const socketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsClose, onOpen, onClose, onError, onMessage } =
        wsActions;

      if (type === wsInit) {
        console.log('ws init', payload);
        socket = new WebSocket(payload);
      }

      if (type === wsClose) {
        console.log('ws close');
        socket.close();
      }

      if (socket) {
        socket.onopen = (event) => {
          console.log('connections opened:', event);
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        socket.onmessage = (event) => {
          console.log('got message:', event);
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({ type: onMessage, payload: parsedData });
        };
      }

      next(action);
    };
  };
};
