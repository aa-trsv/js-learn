import { getChildren, isFile } from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const downcaseFileNames = (tree) => {
    if (isFile(tree)) {
        return;
    }

    const children = getChildren(tree);

    children.map((child) => {
        child.name = _.lowerCase(child.name);
    })

    children.forEach(downcaseFileNames);
}

export default downcaseFileNames;