import {useParams} from 'react-router-dom'


const BookItem = ({book}) => {
    return (
        <tr>
            <td>
                {book.title}
            </td>
            <td>
                {book.first_publishing}
            </td>
        </tr>
    )
}

const AuthorBookList = ({books}) => {
    var {authorId} = useParams()
    var filteredBooks = books.filter((book) => book.authors.includes(parseInt(authorId)))

    return (
        <table>
            <th>
                Книга
            </th>
            <th>
                Год первого издания
            </th>
            {filteredBooks.map((book) => <BookItem book={book} /> )}
        </table>
    )
}

export default AuthorBookList