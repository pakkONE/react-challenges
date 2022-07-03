import React from 'react'

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }
    
    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('previous state:', prevState)
            console.log('previous props:', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }


    incrementCount() {
        this.setState((prevState, prevProps) => {
            console.log('previous state:', prevState)
            console.log('previous props:', prevProps)
            return {
                count: prevState.count + 1
            }
        });
    }


    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting} Increment this number bu clicking the button bellow: {this.state.count}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementCount()}>Increment</button>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;