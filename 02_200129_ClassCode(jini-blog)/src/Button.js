import React from 'react';
import './Button.css'


class Button extends React.Component{

    onButtonClicked(){
        alert("Button Clicked")
    }

    render(){
        return(
            <div onClick={e=>{this.onButtonClicked()}} className="button">
                {this.props.name}
            </div>
        )
    }

}


export default Button;