// Реализуйте и экспортируйте по умолчанию класс Cart, представляющий из себя покупательскую корзину. Интерфейс:
//
// addItem(item, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства: name – имя и price – стоимость.
// getItems – возвращает товары в формате [{ item, count }, { item, count }, ...]
// getCost – возвращает стоимость корзины. Общая стоимость корзины высчитывается как стоимость всех добавленных товаров с учетом их количества.
// getCount – возвращает количество товаров в корзине
// Примеры
import Cart from "./Cart.js";

const cart = new Cart();

cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
console.log(cart.getItems().length); // 2
console.log(cart.getCost()); // 35
console.log(cart.getCount()); // 7


const cart2 = new Cart();

cart2.addItem({ name: 'car', price: 8 }, 2);
cart2.addItem({ name: 'house', price: 34 }, 7);
cart2.addItem({ name: 'horse', price: 120 }, 1);
console.log(cart2.getItems().length); // 3
console.log(cart2.getCost()); // 374
console.log(cart2.getCount()); // 10