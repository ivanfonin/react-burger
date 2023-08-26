export const socketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsClose, onOpen, onError, onClose, onMessage } =
        wsActions;

      if (type === wsInit) {
        socket = new WebSocket(payload);

        if (socket) {
          socket.onopen = (event) => {
            dispatch({ type: onOpen, payload: event });
          };

          socket.onclose = (event) => {
            dispatch({ type: onClose, payload: event });
          };

          socket.onerror = (event) => {
            dispatch({ type: onError, payload: event });
          };

          socket.onmessage = (event) => {
            const { data } = event;
            const { orders, total, totalToday } = JSON.parse(data);
            dispatch({
              type: onMessage,
              message: { orders, total, totalToday },
            });
          };
        }
      }

      if (type === wsClose) {
        socket.close();
      }

      next(action);
    };
  };
};
