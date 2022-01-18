class Card {
    constructor() {
        this.card = [];
    }

    // addItem(item, count) – добавляет в корзину товары и их количество.
    // Товар это объект у которого два свойства: name – имя и price – стоимость.
    addItem(item, count) {
        this.card.push({
            item: {
                name: item.name,
                price: item.price
            },
            count: count
        });
    }

    // getItems – возвращает товары в формате [{ item, count }, { item, count }, ...]
    getItems() {
        return this.card;
    }

    // getCost – возвращает стоимость корзины.
    // Общая стоимость корзины высчитывается как стоимость всех добавленных товаров с учетом их количества.
    getCost() {
        return this.card.reduce((sum, current) => sum + this.getCostItem(current), 0 );
    }

    // getCostItem – возвращает стоимость одной категории товара.
    getCostItem(item) {
        return item.item.price * item.count;
    }

    // getCount – возвращает количество товаров в корзине
    getCount() {
        return this.card.reduce((sum, current) => sum + current.count, 0 );
    }
}

export default Card;