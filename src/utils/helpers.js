/**
 * Функция группировки объектов по заданному свойству.
 *
 * @param {Array} arr Массив объектов-ингредиентов.
 * @param {String} key Свойство объекта, по которому будем группировать.
 * @returns {Object} Объект ключ-значение, где ключи – это различные значения
 *  свойств переданного key, а значения – массивы объектов с одинаковым key:
 *  [ 'key_value_1': [ {}, {} ], 'key_value_2': [ {}, {} ] ]
 */
export const groupBy = (arr, key) => {
  const result = {};
  arr.forEach((item) => {
    if (item[key] in result) {
      result[item[key]].push(item);
    } else {
      result[item[key]] = new Array(item);
    }
  });
  return result;
};

/**
 * Функция сохранения Cookie в браузере.
 *
 * @param {String} name Название cookie.
 * @param {Object} value Значение cookie.
 * @param {Object} props Дополнительные свойства cookie.
 */
export const setCookie = (name, value, props) => {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
};

/**
 * Функция получения Cookie из браузера.
 *
 * @param {String} name Название cookie.
 */
export const getCookie = (name) => {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' + // eslint-disable-next-line
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

/**
 * Функция возвращает статус на русском и класс для текста.
 *
 * @param {String} status Статус на английском.
 */
export const parseStatus = (status) => {
  switch (status) {
    case 'created':
      return {
        color: 'text_color_default',
        label: 'Создан',
      };
    case 'pending':
      return {
        color: 'text_color_default',
        label: 'Готовится',
      };
    case 'done':
      return {
        color: 'text_color_success',
        label: 'Выполнен',
      };
    default:
      return {
        color: 'text_color_error',
        label: 'Отменен',
      };
  }
};
