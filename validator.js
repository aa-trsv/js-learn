import { object, string, number } from 'yup';

const getInvalidBooks = (books) => {
    let validateBook = object().shape({
        name: string().required(),
        author: string().required(),
        pagesCount: number().positive().integer(),
        link: string().url(),
        genre: string()
    })

    return books.map((book) => validateBook.validateSync(book));
}

export default getInvalidBooks;