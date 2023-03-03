const BookItem = ({book}) => {
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

const BookList = ({books}) => {
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
            {books.map((book) => <BookItem book={book} /> )}
        </table>
    )
}

export default BookList