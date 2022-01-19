// minLength (по умолчанию 8) - минимальная длина пароля
// containNumbers (по умолчанию true) - требование содержать хотя бы одну цифру
class PasswordValidator {
    constructor({minLength = 8, containNumbers = true}) {
        this.minLength = minLength;
        this.containNumbers = containNumbers;
    }

    validate(data) {
        let response = {};
        if (this.containNumbers) {
            const regExp = /\d+/g;
            const number = data.match(regExp);

            if (number === null || number.length < 1) {
                response = { containNumbers: 'The password must contain at least 1 digit!' };
                return response;
            }
        }

        if (data.length < this.minLength) {
            response = { minLength: 'too small' };
            return response;
        }

        return response;
    }
}

export default PasswordValidator;