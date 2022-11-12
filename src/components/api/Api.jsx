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
}