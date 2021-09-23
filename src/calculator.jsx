import React, { Component } from 'react';
import Block from "./block"

class Calculator extends Component {
    render() { 
        return <div className="h-auto w-80 flex flex-col border-2 border-gray-200 bg-gray-200">
            <input className="flex-auto h-10 w-full border-2 bg-white p-2"/>
            <div className="flex-auto h-auto w-full flex flex-row">
                <button className="flex flex-grow m-1 p-1 justify-center items-center bg-white">Clear</button>
                <button className="flex flex-grow m-1 p-1 justify-center items-center bg-white">Delete</button>
            </div>
<Block/>

        </div>;
    }
}
 
export default Calculator ;
