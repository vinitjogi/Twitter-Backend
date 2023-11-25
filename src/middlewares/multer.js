import multer from 'multer';
import DatauriParser from 'datauri/parser.js';

const storage = multer.memoryStorage();

export const uploadImg = multer({storage}).single('image');

const parser = new DatauriParser();

export const getDataUri = (buffer) => {
    const dataUri = parser.format('.png', buffer);
    return dataUri;
}
