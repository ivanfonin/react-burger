export class Api {
  constructor(config) {
    this._config = config;
  }

  _checkResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  get(path, parameters = {}) {
    return this._request(`${this._config.baseUrl}${path}`, parameters);
  }

  post(path, data, parameters = {}) {
    parameters.method = 'POST';
    parameters.headers = { 'Content-Type': 'application/json;charset=utf-8' };
    parameters.body = JSON.stringify(data);

    return this._request(`${this._config.baseUrl}${path}`, parameters);
  }
}
