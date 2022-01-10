import _ from 'lodash'

const cloneDeep = (obj) => {
    if (_.isObject(obj) === false) {
        return obj;
    }

    const cloneObj = {};
    const keys = _.keys(obj);

    for (const key of keys) {
        cloneObj[key] = cloneDeep(obj[key]);
    }

    return cloneObj;
}

export default cloneDeep;