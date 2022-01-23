import fsp from 'fs/promises';

export const getTypes = (paths) => {
    const initPromise = Promise.resolve([]);

    const promise = paths.reduce((acc, path) => {
        const newAcc = acc.then((contents) => {
            fsp.stat(path).then((stats) => {
                if (stats.isDirectory()) {
                    contents.push('dir');
                }
                if (stats.isFile()) {
                    contents.push('file');
                }
                
            })
        });
        return newAcc;
    }, initPromise);

    return promise;
}