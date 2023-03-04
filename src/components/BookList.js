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

const BookList = ({books, authors}) => {
    return (
        <table>
            <th>
                Книга
            </th>
            <th>
                Год издания
            </th>
            <th>
                Последнее издание
            </th>
            <th>
                Автор
            </th>
            {books.map((book) => <BookItem book={book} authors={authors}/> )}
        </table>
    )
}

export default BookList