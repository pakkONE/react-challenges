import React from 'react';
import css from './css/NavBarSimple.module.css';

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            buttonText: "log in",
            logo: "Galleries",
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log(prevState.message)
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
                logo: prevState.logo === "Galleries" ? "My Gallery" : "Galleries"
            }
        })
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>{this.state.logo}</h1>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default NavBarSimple;