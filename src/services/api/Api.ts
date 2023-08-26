import { getCookie, setCookie } from '../../utils/helpers';
import { TApiConfig, IApi } from '../types';
import { TResponse } from '../types/data';

export class Api implements IApi {
  private _config;

  constructor(config: TApiConfig) {
    this._config = config;
  }

  private _checkResponse(res: TResponse) {
    return res.ok
      ? res.json()
      : res.json().then((err: any) => {
          throw new Error(err.message);
        });
  }

  private _request(url: string, options: any) {
    return fetch(url, options)
      .then(this._checkResponse)
      .catch((err) => {
        if ('jwt expired' === err.message) {
          this.post('/auth/token', { token: getCookie('refreshToken') })
            .then((res: any) => {
              setCookie('token', res.accessToken.split('Bearer ')[1], {
                path: '/',
              });
              setCookie('refreshToken', res.refreshToken, { path: '/' });
              options.headers = options.headers || {};
              options.headers.Authorization = res.refreshToken;
              this._request(url, options);
            })
            .catch((message) => {
              console.log(message);
            });
        } else if ('You should be authorised' === err.message) {
          window.location.reload();
        } else {
          return Promise.reject(err.message);
        }
      });
  }

  get(path: string, options: any = {}) {
    return this._request(`${this._config.baseUrl}${path}`, options);
  }

  post(path: string, data: any, options: any = {}) {
    options = options || {};
    options.method = 'POST';
    options.mode = 'cors';
    options.cache = 'no-cache';
    options.credentials = 'same-origin';
    options.headers = options.headers || {};
    options.headers['Content-Type'] = 'application/json;charset=utf-8';
    options.redirect = 'follow';
    options.referrerPolicy = 'no-referrer';
    options.body = JSON.stringify(data);

    return this._request(`${this._config.baseUrl}${path}`, options);
  }

  patch(path: string, data: any, options: any = {}) {
    options = options || {};
    options.method = 'PATCH';
    options.mode = 'cors';
    options.cache = 'no-cache';
    options.credentials = 'same-origin';
    options.headers = options.headers || {};
    options.headers['Content-Type'] = 'application/json;charset=utf-8';
    options.redirect = 'follow';
    options.referrerPolicy = 'no-referrer';
    options.body = JSON.stringify(data);

    return this._request(`${this._config.baseUrl}${path}`, options);
  }
}
