import { access, appendFile } from 'fs/promises'
import { constants } from 'fs';

export const touch = (filePath) => {
    const accesses = access(filePath, constants.R_OK)
        .catch((e) => {
            appendFile(filePath, 'test')
            .catch((e) => {
                throw e;
            });
        });

    return accesses;
}