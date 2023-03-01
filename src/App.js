import React from 'react'
import axios from 'axios'
import AuthorList from './components/AuthorList.js'
import BookList from './components/BookList.js'
import Menu from './components/Menu.js'


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            'authors': [],
            'books': []
        }

    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8000/api/authors/')
            .then(response => {
                const authors = response.data.results
                    this.setState(
                    {
                        'authors': authors
                    }
                )
            })
            .catch(error => console.log(error))

        axios
            .get('http://127.0.0.1:8000/api/books/')
            .then(response => {
                const books = response.data.results
                    this.setState(
                    {
                        'books': books
                    }
                )
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <Menu />
            <div>
                <AuthorList authors={this.state.authors} />
            <div>
                <BookList books={this.state.books} />
            </div>
            </div>
            </div>
        )
    }
}


export default App;
