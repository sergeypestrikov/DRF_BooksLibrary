import React from 'react'

const BookItem = ({book, authors}) => {
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
        </tr>
    )
}
//.map(authorId => authors.find(a => a.id === authorId).surname)}

const BookList = ({books, authors}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Книга
                    </th>
                    <th>
                        Год
                    </th>
                    <th>
                        Последнее издание
                    </th>
                    <th>
                        Автор
                    </th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => <BookItem book={book} authors={authors} /> )}
            </tbody>
        </table>
    )
}

export default BookList