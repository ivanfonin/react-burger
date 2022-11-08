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
  arr.forEach(item => {
    if (item[key] in result) {
      result[item[key]].push(item);
    } else {
      result[item[key]] = new Array(item);
    }
  });
  return result;
}
