import { stat } from 'fs';

export const compareFileSizes = (filepath1, filepath2, cb) => {
    const readFileStat = (filesPath, filesInfo = []) => {
        if (filesPath.length === 0) {
            const diffFilesSize = filesInfo[0].size - filesInfo[1].size;
            cb(null, Math.sign(diffFilesSize));
            return;
        }

        const [filePath, ...otherPath] = filesPath;
        stat(filePath, (_error, stat) => {
            readFileStat(otherPath, [...filesInfo, { filePath, size: stat.size }]);
        });
    }
    readFileStat([filepath1, filepath2], []);
}