import fs from 'fs';

const print = (path) => {
    const callback = (_error, data) => console.log(data);

    fs.readFile(path, 'utf-8', callback);
}

export default print;