import { TMessage } from '../reducers/ws';

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' =
  'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_CLOSE: 'WS_CONNECTION_CLOSE' = 'WS_CONNECTION_CLOSE';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' =
  'WS_CONNECTION_CLOSED';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';

interface IWsConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
}

interface IWsConnectionClose {
  readonly type: typeof WS_CONNECTION_CLOSE;
}

interface IWsGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: TMessage;
}

export const wsConnectionStart = (url: string): IWsConnectionStart => {
  return {
    type: WS_CONNECTION_START,
    payload: url,
  };
};

export const wsConnectionClose = (): IWsConnectionClose => {
  return {
    type: WS_CONNECTION_CLOSE,
  };
};

export const wsGetMessage = (message: TMessage): IWsGetMessage => {
  return {
    type: WS_GET_MESSAGE,
    payload: message,
  };
};
