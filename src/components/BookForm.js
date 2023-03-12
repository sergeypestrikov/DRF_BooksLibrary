import React from 'react'


class BookForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            'title': '',
            'authors': []
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAuthorsSelect(event) {
        if (!event.target.selectedOptions) {
             this.setState({
            'authors': []

            })
            return;
        }
        let authors = []

        for(let option of event.target.selectedOptions){
            authors.push(option.value)
        }

        this.setState({
            'authors': authors
    })

 }

    handleSubmit(event) {
        this.props.createBook(this.state.title, this.state.authors)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type='text' name='title' placeholder='название книги' value={this.state.login} onChange={(event) => this.handleChange(event)} />
                    <select multiple onChange={(event) => this.handleAuthorsSelect(event)} >
                        {this.props.authors.map((author) => <option value={author.id}>{author.name} {author.surname}</option> )}

                    </select>
                    <input type='submit' value='Добавить книгу' />
                </form>
            </div>
        )
    }
}


export default BookForm;