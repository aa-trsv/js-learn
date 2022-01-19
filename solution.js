import _ from 'lodash';

const normalize = (countries) => {
    const result = {};
    for (const country of countries) {
        const key = country.country.toLowerCase().trim();
        const value = country.name.toLowerCase();

        if (!_.has(result, key)) {
            result[key] = [];
        }
        result[key].push(value);
    }
    return result;
}

export default normalize;