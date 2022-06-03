import React from "react";
import Button from "./Button";


class Clock extends React.Component{

    state = {date : new Date(), local : 'bn-BD'}

    
    
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
    
    handler = (local) => {
  
        this.setState({

            local 
        })
    }



    render(){


        

      const { local} = this.state;

        return (

            <div>
                <h1>
                Hello {this.props.children}
                <span> {this.state.date.toLocaleString(local)}</span>
                </h1>

               <Button change={this.handler} local='en-US'> Click Here</Button>

            </div>
        );
    }
}

export default Clock;