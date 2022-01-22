import { writeFile, promises } from 'fs'

export const reverse = (filePath) => {
    promises.readFile(filePath, 'utf-8')
        .then((file) => file.toString().split('\n').reverse().join('\n'))
        .then((fileReverse) => promises.writeFile(filePath, fileReverse));
}