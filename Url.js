import { URL } from 'url';

class Url {
    // конструктор — принимает на вход HTTP-адрес в виде строки.
    constructor(urlString) {
        this.myUrl = new URL(urlString);
    }

    // getScheme() — возвращает протокол передачи данных (без двоеточия).
    getScheme() {
        let protocol = this.myUrl.protocol;
        return protocol.slice(0,-1);
    }

    // getHostName() — возвращает имя хоста.
    getHostName() {
        return this.myUrl.host;
    }

    // getQueryParams() — возвращает параметры запроса в виде пар ключ-значение объекта.
    getQueryParams() {
        const queryParams = {};
        this.myUrl.searchParams.forEach((value, name) => {
            queryParams[name] = value;
        });
        return queryParams;
    }

    // getQueryParam() — получает значение параметра запроса по имени.
    // Если параметр с переданным именем не существует, метод возвращает значение заданное вторым параметром (по умолчанию равно null).
    getQueryParam(param, defaultValue = null) {
        return this.myUrl.searchParams.get(param)
            ? this.myUrl.searchParams.get(param)
            : defaultValue;
    }

    // equals(url) — принимает объект класса Url и возвращает результат сравнения с текущим объектом — true или false.
    equals(url) {
        if (this.myUrl.toString() === url.myUrl.toString()) {
            return true;
        }
        return false;
    }
}

export default Url;