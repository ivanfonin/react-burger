export class Api {
  constructor(config) {
    this._config = config;
  }

  _checkResponse(res) {
    return (res.ok) ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  get(path, parameters = {}) {
    return fetch(`${this._config.baseUrl}${path}`, parameters)
      .then(this._checkResponse);
  }

  post(path, data, parameters = {}) {
    parameters.method = 'POST';
    parameters.headers = { 'Content-Type': 'application/json;charset=utf-8' };
    parameters.body = JSON.stringify(data);
    return fetch(`${this._config.baseUrl}${path}`, parameters)
      .then(this._checkResponse);
  }
}
