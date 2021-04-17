import React, { Component } from 'react'
import './Calculator.css';

import Display from '../Display/index'
import ControlPanel from '../ControlPanel'
import Digits from '../Digits'
import History from '../History'
import Operators from '../Operators/Operators'

import ee from '../../eventEmitter'
import store from '../../Store';

export class Calculator extends Component {
    constructor(prop){
        super()
        ee.addListener('displayUpdate', ()=>this.forceUpdate());
    }


    render() {
        return (            
             <main className="react-calculator">
                <Display text={store.curExpression}/>
                <ControlPanel/>
                <Digits/>
                <History/>
                <Operators/>                 
            </main>
            
        )
    }
}

export default Calculator
