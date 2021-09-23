import React, { Component } from 'react';

class Block extends Component {
    render() { 
        return <div>
                <div className = "h-auto w-auto flex flex-col bg-gray-200">
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex-auto m-2 p-2 bg-white text-center">7</div>
                        <div className="flex-auto m-2 p-2 bg-white text-center">8</div>
                        <div className="flex-auto m-2 p-2 bg-white text-center">9</div>
                        <div className="flex-auto m-2 p-2 bg-white text-center">/</div> 
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex-auto m-2 p-2 bg-white text-center">4</div>
                        <div className="flex-auto m-2 p-2 bg-white text-center">5</div>
                        <div className="flex-auto m-2 p-2 bg-white text-center">6</div>
                        <div className="flex-auto m-2 p-2 bg-white text-center">-</div>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex-auto m-2 p-2 bg-white text-center">1</div>
                        <div className="flex-auto m-2 p-2 bg-white text-center">2</div>
                        <div className="flex-auto m-2 p-2 bg-white text-center">3</div>
                        <div className="flex-auto m-2 p-2 bg-white text-center">+</div>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex-auto m-2 p-2 bg-white text-center">0</div>
                        <div className="flex-auto m-2 p-2 bg-white text-center">.</div>
                        <div className="flex-auto m-2 p-2 bg-white text-center">=</div>
                        <div className="flex-auto m-2 p-2 bg-white text-center">x</div>
                    </div>
                </div>
              </div>
    }
}
 
export default Block;