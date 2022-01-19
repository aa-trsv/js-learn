// Для работы с текстом в вебе бывает полезна функция truncate(), которая обрезает слишком длинный текст и ставит в конце многоточие:
//
// truncate('long text', { length: 3 }); // lon...
// solution.js
// Реализуйте в классе Truncater конструктор и метод truncate(). Метод принимает текст и следующие опции:
//
// separator - символ, заменяющий обрезанную часть строки
// length - максимальная длина исходной строки. Если строка короче, чем эта опция, то возвращается исходная строка.
// Конфигурацию по умолчанию можно переопределить через конструктор класса и вторым аргументом метода truncate(). Оба способа можно комбинировать.

import Truncater from "./solution.js";

const truncater = new Truncater();
console.log(truncater.truncate('one two', {})); // 'one two'
console.log(truncater.truncate('one two', { 'length': 6 })); // 'one tw...'

