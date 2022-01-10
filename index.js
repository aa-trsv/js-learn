// Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.
// Для реализации этой задачи нельзя использовать функцию cloneDeep() библиотеки lodash.

import cloneDeep from './objects.js';

const data = {
    key: 'value',
    key2: {
        key: 'innerValue',
        innerKey: {
            anotherKey: 'anotherValue',
        },
    },
};

// result имеет такую же структуру, как и data
const result = cloneDeep(data);

// Но внутри другие объекты
if (result.key2 !== data.key2) {
    console.log('check 1');
} // true
if (result.key2.innerKey !== data.key2.innerKey) {
    console.log('check 2');
} // true