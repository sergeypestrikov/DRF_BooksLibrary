import React from 'react'
import axios from 'axios'
import AuthorList from './components/AuthorList.js'
import BookList from './components/BookList.js'
import AuthorBookList from './components/AuthorBookList.js'
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'
import {HashRouter, BrowserRouter, Route, Routes, Link, Navigate, useLocation, useNavigate} from 'react-router-dom'


const NotFound = () => {
    var {pathname} = useLocation()

    return (
        <div className='container'>
            Page '{pathname}' not found
        </div>
    )
}


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
                const authors = response.data
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
                const books = response.data
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
                <BrowserRouter>
                <Menu />
                    <nav>
                    </nav>
                    <Routes>
                        <Route exact path='/' element={<Navigate to='/authors' />} />
                        <Route exact path='/books' element={<BookList books={this.state.books} />} />
                        <Route path='/authors'>
                            <Route index element={<AuthorList authors={this.state.authors} />} />
                            <Route path=':authorId' element={<AuthorBookList books={this.state.books} />} />
                            </Route>
                            <Route path='*' element={<NotFound />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}


export default App;