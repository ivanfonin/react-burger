import {
  TArrayOfString,
  TClassesObject,
  TCookieProps,
} from '../services/types';
import { TIngredient, TStatus } from '../services/types/data';

/**
 * Функция группировки объектов по заданному свойству.
 *
 * @param {Array} arr Массив объектов-ингредиентов.
 * @param {String} key Свойство объекта, по которому будем группировать.
 *
 * @returns {Object} Объект ключ-значение, где ключи – это различные значения
 *  свойств переданного key, а значения – массивы объектов с одинаковым key:
 *  { 'key_value_1': [ {}, {} ], 'key_value_2': [ {}, {} ] }
 */
export const groupBy = (arr: TIngredient[], key: keyof TIngredient) => {
  let result: {
    [key: string]: Array<TIngredient>;
  } = {};
  arr.forEach((item: TIngredient) => {
    const keyVal = Object.hasOwn(item, key) ? item[key] : false;

    if ('string' !== typeof keyVal) return;

    if (Object.hasOwn(result, keyVal)) {
      result[keyVal].push(item);
    } else {
      result[keyVal] = new Array(item);
    }
  });
  return result;
};
/**
 * Функция сохранения Cookie в браузере.
 *
 * @param {String} name Название cookie.
 * @param {String} value Значение cookie.
 * @param {Object} props Дополнительные свойства cookie.
 */
export const setCookie = (
  name: string,
  value: string,
  props: TCookieProps
): void => {
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

type TCookie = string | undefined;

/**
 * Функция получения Cookie из браузера.
 *
 * @param {String} name Название cookie.
 */
export const getCookie = (name: string): TCookie => {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' + // eslint-disable-next-line
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

interface IStatusResolved {
  readonly color:
    | 'text_color_default'
    | 'text_color_success'
    | 'text_color_error';
  readonly label: string;
}

/**
 * Функция возвращает статус на русском и класс для текста.
 *
 * @param {String} status Статус на английском.
 */
export const parseStatus = (status: TStatus): IStatusResolved => {
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

/**
 * Функция вычисляет класс на основе переданного объекта или массива.
 *
 * @param {Object|Array} classes Передаем данные для вычислений.
 *
 * @description Если передан объект, то в ключах должны содержаться классы, в значениях
 * логическое выражение. Если выражение верно, класс попадет в итоговый результат.
 * Если передан массив строк, то объединяем все элементы в единый класс.
 *
 * @example const modalClass = classnames({ ['one']: true, ['two']: isCondition });
 * Если условие isCondition верно, то modalClass будет раве 'one two', а иначе только 'one'.
 *
 * @returns {String} Возвращаем итоговый класс.
 */
export const classnames = (
  classes: TClassesObject | TArrayOfString
): string => {
  if (Array.isArray(classes)) {
    return classes.join(' ');
  } else {
    const result = [];
    for (let key of Object.keys(classes)) {
      if (classes[key]) {
        result.push(key);
      }
    }
    return result.join(' ');
  }
};
