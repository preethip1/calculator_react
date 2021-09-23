import React, { Component } from 'react';
import Button from './button';

class Block extends Component {
    onNumberClick(number) {
       console.log("clicked" , number)
    }

    render() { 
        return <div>
                <div className = "h-auto w-auto flex flex-col bg-gray-200">
                    <div className="flex flex-row justify-center items-center">
                        <Button onClick={this.onNumberClick("7")} btntxt='7'/>
                        <Button onClick={this.onNumberClick("8")} btntxt='8'/>
                        <Button onClick={this.onNumberClick("9")} btntxt='9'/>
                        <Button onClick={this.onNumberClick("/")} btntxt='/'/> 
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <Button onClick={this.onNumberClick("4")} btntxt='4'/>
                        <Button onClick={this.onNumberClick("5")} btntxt='5'/>
                        <Button onClick={this.onNumberClick("6")} btntxt='6'/>
                        <Button onClick={this.onNumberClick("-")} btntxt='-'/>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <Button onClick={this.onNumberClick("1")} btntxt='1'/>
                        <Button onClick={this.onNumberClick("2")} btntxt='2'/>
                        <Button onClick={this.onNumberClick("3")} btntxt='3'/>
                        <Button onClick={this.onNumberClick("+")} btntxt='+'/>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <Button onClick={this.onNumberClick("0")} btntxt='0'/>
                        <Button onClick={this.onNumberClick(".")} btntxt='.'/>
                        <Button onClick={this.onNumberClick("=")} btntxt='='/>
                        <Button onClick={this.onNumberClick("x")} btntxt='x'/>
                    </div>
                </div>
              </div>
    }
}
 
export default Block;