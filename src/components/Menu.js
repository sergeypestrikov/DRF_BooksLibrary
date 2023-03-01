import React, {Component} from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }

    toggleState() {
        this.setState({ isOpened: this.state.isOpened });
    }

    render() {
        console.log( 'isOpened', this.state.isOpened );
        let menuText;
        if (this.state.isOpened) {
            menuText = <div> ЗДЕСЬ БУДЕТ МЕНЮ </div>;

        }
        return (
            <div onClick={this.toggleState.bind(this)}>
            МЕНЮ
            {menuText}
            </div>
        );
    }
}

export default Menu;



//import {Container, Navbar} from 'react-bootstrap'
//
//export function Menu()
//{
//    return (
//        <header>
//            <Navbar bg='dark' variant='dark' expand='lg'>
//                <Container>
//                    <Navbar.Brand href='#home'>React Rest Django</Navbar.Brand>
//                </Container>
//            </Navbar>
//        </header>
//
//    )
//}
//export default Menu;