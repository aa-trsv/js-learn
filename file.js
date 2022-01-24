import fsp from 'fs/promises';

export const exchange = async (file1, file2) => {
    const promise1 = await fsp.readFile(file1, 'utf-8');
    const promise2 = await fsp.readFile(file2, 'utf-8');

    const [data1, data2] = await Promise.all([promise1, promise2]);

    await fsp.writeFile(file1, data2);
    await fsp.writeFile(file2, data1);

    console.log('Done!');
}