import _ from 'lodash'

const groupBy = (arr, prop) => {
    const cb = (acc, user) => {
        if (!_.has(acc, user[prop])) {
            acc[user[prop]] = [];
        }
        acc[user[prop]].push(user);
        return acc;
    }

    const result = arr.reduce(cb, {});
    console.log(result);
    return result;
}



export default groupBy;