import { getCookie, setCookie } from '../../utils/helpers';

export class Api {
  constructor(config) {
    this._config = config;
  }

  _checkResponse(res) {
    return res.ok
      ? res.json()
      : res.json().then((err) => {
          throw new Error(err.message);
        });
  }

  _request(url, options) {
    return fetch(url, options)
      .then(this._checkResponse)
      .catch((err) => {
        if ('jwt expired' === err.message) {
          this.post('/auth/token', { token: getCookie('refreshToken') })
            .then((res) => {
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

  get(path, options = {}) {
    return this._request(`${this._config.baseUrl}${path}`, options);
  }

  post(path, data, options = {}) {
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

  patch(path, data, options = {}) {
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
