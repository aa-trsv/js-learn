// Реализуйте и экспортируйте асинхронную функцию touch(), которая создаёт файл, если его не существует.

import { touch } from './file.js';
 
touch('./myfile').then(() => console.log('created!'));