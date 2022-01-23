// Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), 
// которая считает размер переданной директории (не включая поддиректории).

// Пример:
import { getDirectorySize } from './file.js';
 
getDirectorySize('./test');
// .then(console.log)
// Подсказка
// fsPromises.readdir - чтение содержимого директории
// path.join - конструирует пути
// fsPromises.stat - информация о файле
// _.sumBy - нахождение суммы в массиве