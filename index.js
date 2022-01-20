// Реализуйте и экспортируйте асинхронную функцию compareFileSizes(),
// которая сравнивает размеры двух файлов и передает результат сравнения в переданную callback-функцию.
// Если первый файл больше второго, то она передает единицу, если размеры равны, то ноль, иначе — -1.

import { compareFileSizes } from './info.js';

compareFileSizes('./filepath1', './filepath2', (_err, result) => console.log(result));
