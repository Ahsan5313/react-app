import React from "react";

class Button extends React.Component{


  shouldComponentUpdate(nextProps){

    const {change : currentChange, local : currentLocal} = this.props ;
    const {change : nextChange, local : nextLocal} = nextProps ;
    if(currentChange === nextChange && nextLocal === currentLocal){

      return false
    }else{

      return true
    }
  }

      render(){

      

        const {change, local} = this.props;

        return (

            <button onClick={() => change(local)}> Onclick</button>
        )
      }


}

export default Button;