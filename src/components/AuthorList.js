const AuthorItem = ({author}) => {
    return (
        <tr>
            <td>
                {author.name}
            </td>
            <td>
                {author.surname}
            </td>
            <td>
                {author.country}
            </td>
        </tr>
    )
}

const AuthorList = ({authors}) => {
    return (
        <table>
            <th>
                Имя
            </th>
            <th>
                Фамилия
            </th>
            <th>
                Страна
            </th>
            {authors.map((author) => <AuthorItem author={author} /> )}
        </table>
    )
}

export default AuthorList