// Отрезок — еще один графический примитив. В коде описывается парой точек, одна из которых — начало отрезка, другая — конец.
// Обычный отрезок не имеет направления, поэтому вы сами вольны выбирать то, какую точку считать началом, а какую концом.
//
// В этом задании подразумевается, что вы уже понимаете принцип построения абстракции и способны самостоятельно принять решение о том, как она будет реализована.
// Напомню, что сделать это можно разными способами и нет одного правильного.
//
// segments.js
// Реализуйте и экспортируйте указанные ниже функции:
//
// makeSegment(). Принимает на вход две точки и возвращает отрезок.
// getMidpointOfSegment(). Принимает на вход отрезок и возвращает точку находящуюся на середине отрезка.
// getBeginPoint(). Принимает на вход отрезок и возвращает точку начала отрезка.
// getEndPoint(). Принимает на вход отрезок и возвращает точку конца отрезка.
// Пример

import { makeDecartPoint, makeSegment, getMidpointOfSegment, getBeginPoint, getEndPoint } from './segments.js';

const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
const segment = makeSegment(beginPoint, endPoint);

console.log(getMidpointOfSegment(segment)); // (1.5, 1)
console.log(getBeginPoint(segment)); // (3, 2)
console.log(getEndPoint(segment)); // (0, 0)
