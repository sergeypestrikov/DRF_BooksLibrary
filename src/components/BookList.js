import React from 'react'

const BookItem = ({book, authors, deleteBook}) => {
//    var temp = authors[0].id;

    return (
        <tr>
            <td>
                {book.title}
            </td>
            <td>
                {book.first_publishing}
            </td>
            <td>
                {book.last_publishing}
            </td>
            <td>
                {book.authors}
            </td>
            <td>
                <button onClick={() => deleteBook(book.id)}> Delete </button>
            </td>
        </tr>
    )
}
//.map(authorId => authors.find(a => a.id === authorId).surname)}

const BookList = ({books, authors, deleteBook}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Название книги
                    </th>
                    <th>
                        Год изд
                    </th>
                    <th>
                        Посл изд
                    </th>
                    <th>
                        Автор
                    </th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => <BookItem book={book} authors={authors} deleteBook={book.id}/> )}
            </tbody>
        </table>
    )
}

export default BookList