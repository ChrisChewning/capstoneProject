import React, {Component} from 'react';
import {Button, Buttons, Form, Icon, Row, Input} from 'react-materialize'

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayVal: '0',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick= (e) => {
    this.setState({displayNum: this.state.displayNum});
  }

inputDigit(digit){
  const { displayVal } = this.state
//if expr (displayVal = 'hello') is true then Stringify the digit. if not then displayVal + the digit. accepts a fn as its parameter.
  this.setState({displayVal: displayVal === '0' ? String(digit): displayVal + digit})
}

inputDot(){
const { displayVal } = this.state
if (displayVal.indexOf('.') === -1 ) {
  this.setState({displayVal: this.state.displayVal + '.'})
}
}

clear(){
  const { displayVal } = this.state
  this.setState({displayVal: '0'});
}

togglePN(){
  const { displayVal } = this.state
  //condition: 1st char of displayVal is the - sign
  //if true: cut off the 1st character. .substr(1) also cuts off the 1st character. MDN docs explains this.
  //if false: put - and the displayVal
  this.setState({displayVal: displayVal.charAt(0) === '-' ? displayVal.slice(1) : '-' + displayVal})
}

percent(){
 const { displayVal } = this.state
 const value = parseFloat(displayVal)
 //MDN: parseFloat() fn parses an arg and returns a floating point number.
 this.setState({displayVal: String (value / 100)})
}


  render() {
    console.log(this.state.displayNum, 'handleClick');

    return (
       <div className='calculatorWrapper'>

      <div className='cal-display'>{this.state.displayVal}</div>

      <div className='cal-keypad'>

        <div className='input-keys'>
          <div className='function-keys'>
            <button className='cal-key key-clear' onClick={() => this.clear()}>AC</button>
            <button className='cal-key key-sign' onClick={() => this.togglePN()}>±</button>
            <button className='cal-key key-percent' onClick={() => this.percent()}>%</button>
              <button className='cal-key key-divide key-operations'>/</button>
          </div>

          <div className='digit-keys'>
            <div className='top-row'>
              <Button className='cal-key key-7' labe="7" value="7" onClick={() => this.inputDigit(7)} label='7' value='7'>7</Button>
              <Button className='cal-key key-8' onClick={() => this.inputDigit(8)} label='8' value='8'>8</Button>
              <Button className='cal-key key-9' onClick={() => this.inputDigit(9)} label='9' value='9'>9</Button>
              <Button className='cal-key key-multiply key-operations' label='x' value='x'>x</Button>

            </div>
            <div className='2nd-row'>
              <Button className='cal-key key-4' onClick={() => this.inputDigit(4)} label="4" value="4">4</Button>
              <Button className='cal-key key-5' onClick={() => this.inputDigit(5)} label='5' value='5'>5</Button>
              <Button className='cal-key key-6' onClick={() => this.inputDigit(6)} label='6' value='6'>6</Button>
              <Button className='cal-key key-divide key-operations'>+</Button>
            </div>

            <div className='3rd-row'>

              <Button className='cal-key key-1' onClick={() => this.inputDigit(1)} label='1' value='1'>1</Button>
              <Button className='cal-key key-2' onClick={() => this.inputDigit(2)} label='2' value='2'>2</Button>
              <Button className='cal-key key-3' onClick={() => this.inputDigit(3)} label='3' value='3'>3</Button>
              <Button className='cal-key key-subtract key-operations' label="-" value="-">-</Button>


            </div>


            <button className='cal-key key-0' onClick={() => this.inputDigit(0)}>0</button>
            <button className='cal-key key-decimal' onClick={() => this.inputDot()} label='decimal' value='decimal'>.</button>

            <button className='cal-key key-equals'>=</button>


          </div>
        </div>

         {/* <div className='operator-keys'>
         </div> */}

            </div>
      {/* ends keypad */}
    </div>)
  }
}

export default Calculator;
