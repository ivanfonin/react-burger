import { TWsMessage } from '../types/data';

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

interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

interface IWsConnectionClose {
  readonly type: typeof WS_CONNECTION_CLOSE;
}

interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: string;
}

interface IWsGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  readonly message: TWsMessage;
}

export type TWsActions =
  | IWsConnectionStart
  | IWsConnectionSuccess
  | IWsConnectionClose
  | IWsConnectionClosed
  | IWsConnectionError
  | IWsGetMessage;

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

export const wsGetMessage = (message: TWsMessage): IWsGetMessage => {
  return {
    type: WS_GET_MESSAGE,
    message,
  };
};
