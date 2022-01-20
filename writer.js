import { writeFile } from 'fs';

const write = (path, data, cb) => {
    writeFile(path, data, 'utf8', cb);
}

export default write;