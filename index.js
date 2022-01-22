// Реализуйте и экспортируйте асинхронную функцию reverse(), 
// которая изменяет порядок расположения строк в файле на обратный.

// # file.txt
// one
// two
// three
import { reverse } from './file.js';
 
reverse('./file.txt');
// two
// one
// three