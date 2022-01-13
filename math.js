import _ from 'lodash'

const average = (...nums) => {
    const count = nums.length;
    if (count === 0) {
        return 0;
    }
    const result = _.sum(nums)/count;

    console.log(result);
    return result;
}

export default average;