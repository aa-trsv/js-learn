import _ from 'lodash'

const normalize = (lesson) => {
    lesson.name = lesson.name.toLowerCase();
    lesson.name = _.capitalize(lesson.name);
    lesson.description = lesson.description.toLowerCase();
}

export default normalize;