// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
const make = (a, b) => {
    const ratNum = {
        a, b,
        getNumer() {
            return this.a;
        },
        getDenom() {
            return this.b;
        },
        toString() {
            return `${this.a}/${this.b}`;
        },
        add(obj) {
            const c = obj.a * this.a + obj.b * this.b;
            const d = this.b * obj.b;
            return make(c, d);
        }
    }

    return ratNum;
};

export default make;