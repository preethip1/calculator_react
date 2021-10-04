import React, { Component } from 'react';
import Block from "./block"

class Calculator extends Component {
    state = {
        result : '',
    }
    
    onDelete() {
        this.setState({result : this.state.result.slice(0,-1)})
    }

    onClear() {
        this.setState({result : ''});
    }

    onNumberClick = (btntxt) => {
        let newResult;
        if(btntxt === "=") {
           try{
            newResult = eval(this.state.result);
           } catch(error) {
               newResult = "error";
           } 
        }
        else {
            newResult = this.state.result + btntxt;
        }
        this.setState({result : newResult})
     }

    render() { 
        return <div className="h-auto w-80 flex flex-col border-2 border-gray-200 bg-gray-200">
            <div className="h-8 w-auto m-1 bg-white p-1">{this.state.result}  </div>         
            <div className="flex-auto h-auto w-full flex flex-row">
                <button onClick={() => {this.onClear()}}  className="flex flex-grow m-1 p-1 justify-center items-center bg-white">Clear</button>
                <button onClick={() => {this.onDelete()}} className="flex flex-grow m-1 p-1 justify-center items-center bg-white">Delete</button>
            </div>
                <Block numberClick = {this.onNumberClick}/>
        </div>;
    }
}
 
export default Calculator ;
