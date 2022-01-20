import { readFile, writeFile, unlink } from 'fs';

export const move = (path1, path2, cb) => {
    readFile(path1, 'utf-8', (err1, data) => {
        if (err1) {
            cb(err1);
            return;
        }
        writeFile(path2, data, 'utf-8', (err2) => {
            if (err2) {
                cb(err2);
                return;
            }
            unlink(path1, (err3) => cb(err3));
        });
    });
}