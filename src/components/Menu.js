import React, {Component} from 'react';
import {HashRouter, BrowserRouter, Route, Routes, Link, Navigate, useLocation, useNavigate} from 'react-router-dom'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }

    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {
        console.log( 'isOpened', this.state.isOpened );
        let subMenu;
        if (this.state.isOpened) {
            subMenu = <div>
            <li> <Link to='/'>Авторы</Link> </li>
            <li> <Link to='/books'>Книги</Link> </li>
            <li> <Link to='/create_book'>Добавить книгу</Link> </li>
            </div>

        }
        return (
        <div onClick={this.toggleState.bind(this)}>
        МЕНЮ
        {subMenu}
        </div>
        );
    }
}

export default Menu;