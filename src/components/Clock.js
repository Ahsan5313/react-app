import React from "react";


class Clock extends React.Component{

    state = {date : new Date()}

    
    
    componentDidMount(){

       this.clockerTimer =  setInterval(() => this.tick(), 100)
    }

    componentWillUnmount(){

        clearInterval(this.clockerTimer)
    }


    tick(){

        this.setState({

            date : new Date()
          })
    }

    render(){

        return (

            <h1>
                Hello {this.props.children}
                <span> {this.state.date.toLocaleString(this.props.local)}</span>
            </h1>
        );
    }
}

export default Clock;