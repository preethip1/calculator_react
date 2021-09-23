import React, { Component } from 'react';

class Button extends Component {
    render() { 
        return   <div className="flex-auto m-2 p-2 bg-white text-center">{this.props.btntxt}</div>
    }
}
 
export default Button;