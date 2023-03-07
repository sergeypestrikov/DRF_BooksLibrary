import React from 'react'


class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            'login': '',
            'password': ''
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        this.props.obtainAuthToken(this.state.login, this.state.password)
//        console.log(this.state.login, this.sate.password)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type='text' name='login' placeholder='имя пользователя' value={this.state.login} onChange={(event) => this.handleChange(event)} />
                    <input type='password' name='password' placeholder='пароль' value={this.state.password} onChange={(event) => this.handleChange(event)} />
                    <input type='submit' value='Зарегиться' />
                </form>
            </div>
        )
    }
}


export default LoginForm;