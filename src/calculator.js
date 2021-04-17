import React, { Component } from 'react';
import './Calculator.css';
import EventEmitter from 'wolfy87-eventemitter';

const ee = new EventEmitter();
let store = {
    displayedExpression: 0,
    get curExpression() {
        return this.displayedExpression;
    },
    set newExpression(curExpression) {
        this.displayedExpression = curExpression;
        ee.emitEvent('displayUpdate', [this.curExpression]);
        ee.emitEvent('historyUpdate', [this.curExpression]);
    }
};












export default Calculator;
