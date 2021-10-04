import React, { Component } from 'react';
import Button from './button';

class Block extends Component {
    render() { 
        return <div>
                <div className = "h-auto w-auto flex flex-col bg-gray-200">
                    <div className="flex flex-row justify-around items-center">
                        <div onClick={() => this.props.numberClick('7')} className="h-auto w-16"><Button btntxt='7'/> </div>
                        <div onClick={() => this.props.numberClick('8')} className="h-auto w-16" ><Button btntxt='8'/> </div>
                        <div onClick={() => this.props.numberClick('9')} className="h-auto w-16"><Button btntxt='9'/> </div>
                        <div onClick={() => this.props.numberClick('/')} className="h-auto w-16"><Button btntxt='/'/> </div>
                    </div>
                    <div className="flex flex-row justify-around items-center">
                        <div onClick={() => this.props.numberClick('4')} className="h-auto w-16"><Button btntxt='4'/> </div>
                        <div onClick={() => this.props.numberClick('5')} className="h-auto w-16" ><Button btntxt='5'/> </div>
                        <div onClick={() => this.props.numberClick('6')} className="h-auto w-16"><Button btntxt='6'/> </div>
                        <div onClick={() => this.props.numberClick('-')} className="h-auto w-16"><Button btntxt='-'/> </div>
                    </div>
                    <div className="flex flex-row justify-around items-center">
                        <div onClick={() => this.props.numberClick('1')} className="h-auto w-16"><Button btntxt='1'/> </div>
                        <div onClick={() => this.props.numberClick('2')} className="h-auto w-16" ><Button btntxt='2'/> </div>
                        <div onClick={() => this.props.numberClick('3')} className="h-auto w-16"><Button btntxt='3'/> </div>
                        <div onClick={() => this.props.numberClick('+')} className="h-auto w-16"><Button btntxt='+'/> </div>
                    </div>
                    <div className="flex flex-row justify-around items-center">
                        <div onClick={() => this.props.numberClick('0')} className="h-auto w-16"><Button btntxt='0'/> </div>
                        <div onClick={() => this.props.numberClick('.')} className="h-auto w-16" ><Button btntxt='.'/> </div>
                        <div onClick={() => this.props.numberClick('=')} className="h-auto w-16"><Button btntxt='='/> </div>
                        <div onClick={() => this.props.numberClick('x')} className="h-auto w-16"><Button btntxt='x'/> </div>
                    </div>
                </div>
              </div>
    }
}
 
export default Block;