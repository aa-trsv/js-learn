import _ from 'lodash'

const pick = (obj, arr) => {
    const data = {};

    for (const param of arr) {
        if (_.has(obj, param)) {
            data[`${param}`] = obj[`${param}`];
        }
    }

    console.log(data);
    return data;
}

export default pick;