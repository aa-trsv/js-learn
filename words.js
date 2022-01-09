import _ from 'lodash'

const countWords = (string) => {
    const counter = {};
    const wordCollection = _.words(string);

    for (let word of wordCollection) {
        word = word.toLowerCase();

        counter[`${word}`] = (_.has(counter, word))
            ? (counter[`${word}`] += 1)
            : 1;
    }

    console.log(counter);
    return counter;
}

export default countWords;