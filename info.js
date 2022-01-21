import * as async from 'async';
import { readdir, stat } from 'fs';
import path from 'path';

export const getDirectorySize = (dirPath, cb) => {
    readdir(dirPath, (err, filesColl) => {
        if (err) return err;

        const filesPath = filesColl.map((file) => {
            return path.join(dirPath, file);
        })

        const getFileSizeInBytes = (memo, file, callback) => {
            stat(file, (err1, stat) => {
                if (err1) return err1;

                callback(null, memo + stat.size);
            });
        }

        async.reduce(filesPath, 0, getFileSizeInBytes, (err2, size) => {
            if (err2) return err2;

            cb(null, size);
        })
    });
}