import fsp from 'fs/promises';
import path from 'path';

export const getDirectorySize = (pathDir) => {
    fsp.readdir(pathDir).then((files) => {
        const filepath = files.map((file) => {
            return path.join(pathDir, file)
        })
        return filepath;
    })
    .then((filepath) => {
        const promises = filepath.map((file) => fsp.stat(file));
        const promise = Promise.all(promises);
        
        promise.then((stats) => {
            stats.map((file) => {
                console.log(file.size)
            });
        })
    });
}