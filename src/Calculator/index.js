import React, {Component} from 'react';
import { Button} from 'react-materialize';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      value: null, //value you are saving, even if you are pressing x, /, +, -. it is numeric.
      displayVal: '0', //it is a string. just for display.
      waitingForOperand: false, //toogled to true when waitingForOperand is clicked.
      operator: null //null b.c it updates to x, /, +, -
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState({displayVal: this.state.displayVal});
  }

  clear() {
    this.setState({displayVal: '0'});
  }

  inputDigit(digit) {
    const {displayVal, waitingForOperand} = this.state
    if (waitingForOperand) {
      this.setState({
        displayVal: String(digit),
        waitingForOperand: false
      })
    } else {
    this.setState({
      displayVal: displayVal === '0' ? String(digit) : displayVal + digit
    })
      //if expr (displayVal = '0') is true then Stringify the digit. if not then displayVal + the digit. accepts a fn as its parameter.
  }
}



  inputDot() {
    const {displayVal, waitingForOperand} = this.state
    if (waitingForOperand) {
      this.setState({displayVal: '.', waitingForOperand:false})

    } else if (displayVal.indexOf('.') === -1) {
      this.setState({
        displayVal: displayVal + '.',
        waitingForOperand: false,
      })
    }
  }



  togglePN() { //   +/- sign.
    const {displayVal} = this.state
    //condition: 1st char of displayVal is the - sign
    //if true: cut off the 1st char. .substr(1) also works re: MDN docs.
    //if false: put - and the displayVal
    this.setState({
      displayVal: displayVal.charAt(0) === '-'
        ? displayVal.slice(1)
        : '-' + displayVal
    })
  }

  percent() {
    const {displayVal} = this.state
    const value = parseFloat(displayVal)
    //MDN: parseFloat() fn parses an arg and returns a floating point number.
    this.setState({
      displayVal: String(value / 100)
    })
  }


// Where you ensure your inputs get saved even after your click an operator.

  performOperation(nextOperator) {
    const {displayVal, operator, value} = this.state
    // const prevValue = //have to save it.
    const nextValue = parseFloat(displayVal) //pull sting out of display. parse it.  save it to nextValue.

    const operations = { //functions for the = sign.
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue,
    }

    if (value == null) { //null means if you didn't have a previous value. then if an operator key is hit you set the state with the numeric value.
    this.setState({value: nextValue})
  } else if (operator) {
      const currentValue = value || 0
      const computedValue = operations[operator](currentValue, nextValue)
    this.setState({value: computedValue, displayVal: String(computedValue)})
}

    this.setState({waitingForOperand: true, operator: nextOperator})
    //flip the waitingForOperand state to true so it is remembered.

  }

  render() {
    const { displayVal } = this.state
    console.log('state:', this.state );

    return (<div className='calculatorWrapper'>
      <div className='cal-display'>{this.state.displayVal}</div>
      <div className='cal-keypad'>

        <div className='input-keys'>
          <div className='function-keys'>
            <button className='cal-key key-clear' id='AC' onClick={() => this.clear()}>AC</button>
            <button className='cal-key key-sign' onClick={() => this.togglePN()}>±</button>
            <button className='cal-key key-percent' onClick={() => this.percent()}>%</button>
            <button className='cal-key key-divide key-operation' onClick={() => this.performOperation('/')}>/</button>
          </div>

          <div className='digit-keys'>
            <div className='top-row'>
              <Button className='cal-key key-7' label="7" value='7' onClick={() => this.inputDigit(7)} label='7'>7</Button>
              <Button className='cal-key key-8' onClick={() => this.inputDigit(8)} label='8' value='8'>8</Button>
              <Button className='cal-key key-9' onClick={() => this.inputDigit(9)} label='9' value='9'>9</Button>
              <Button className='cal-key key-multiply key-operation' label='x' value='x' onClick={() => this.performOperation('*')}>x</Button>

            </div>
            <div className='2nd-row'>
              <Button className='cal-key key-4' onClick={() => this.inputDigit(4)} label="4" value="4">4</Button>
              <Button className='cal-key key-5' onClick={() => this.inputDigit(5)} label='5' value='5'>5</Button>
              <Button className='cal-key key-6' onClick={() => this.inputDigit(6)} label='6' value='6'>6</Button>
              <Button className='cal-key key-add key-operation' onClick={() => this.performOperation('+')}>+</Button>
            </div>

            <div className='3rd-row'>

              <Button className='cal-key key-1' onClick={() => this.inputDigit(1)} label='1' value='1'>1</Button>
              <Button className='cal-key key-2' onClick={() => this.inputDigit(2)} label='2' value='2'>2</Button>
              <Button className='cal-key key-3' onClick={() => this.inputDigit(3)} label='3' value='3'>3</Button>
              <Button className='cal-key key-subtract key-operation' label="-" value="-" onClick={() => this.performOperation('-')}>-</Button>

            </div>

            <Button className='cal-key key-0' onClick={() => this.inputDigit(0)}>0</Button>
            <Button className='cal-key key-decimal' onClick={() => this.inputDot()} label='decimal' value='decimal'>.</Button>

            <Button className='cal-key key-equals' onClick={() => this.performOperation('=')}>=</Button>

          </div>
        </div>

        {/* <div className='operator-keys'>
         </div> */
        }

      </div>
      {/* ends keypad */}
    </div>)
  }
}

export default Calculator;
