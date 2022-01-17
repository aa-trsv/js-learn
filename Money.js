// Money(value, currency = 'usd') – создает объект-деньги.
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}

// Money.prototype.getValue() – возвращает стоимость в виде числа
Money.prototype.getValue = function getValue() {
    return this.value;
}

// Money.prototype.exchangeTo(currency) – возвращает новый объект-деньги, где значение конвертировано в указанную валюту
// usd -> eur = 0.7
// eur -> usd = 1.2
Money.prototype.exchangeTo = function exchangeTo(currency) {
    if (this.currency === currency) {
        return this.value;
    }

    const exchangeCur = exchangeCurrency[this.currency][currency];

    if (!exchangeCur) {
        console.log(`Нет курса для валютной пары: ${this.currency} и ${currency}`);
        return this.value;
    }

    this.currency = currency;
    this.value = this.value * exchangeCur;

    return this.value;
}

const exchangeCurrency = {
    usd: {
        eur: 0.7
    },
    eur: {
        usd: 1.2
    }
}

// Money.prototype.add(money) – возвращает новый объект-деньги, который представляет из себя сумму исходных и переданных денег,
// в валюте исходных денег (внутри возможна конвертация если валюты не совпадают)
Money.prototype.add = function add(money) {
    if (this.currency !== money.currency) {
        money.exchangeTo(this.currency);
    }

    const countValue = this.value + money.value;
    return new Money(countValue, this.currency);
}

// Money.prototype.format() – возвращает локализованное представление денег удобное для вывода
Money.prototype.format = function format() {
    return this.value.toLocaleString('en-EN', {style: 'currency', currency: this.currency});
}

export default Money;