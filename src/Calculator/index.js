import React, {Component} from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayNum: 'HELLO'
    }
  }


handleClick = (e) => {
  this.setState({[e.target.name]: e.target.value}); // computed properties.
}


  render() {
    console.log(this.handleClick, 'button clicked');

    return (<div className='calculatorWrapper'>

      <div className='cal-display'>{this.state.displayNum}</div>

      <div className='cal-keypad'>

        <div className='input-keys'>
          <div className='function-keys'>
            <button className='cal-key key-clear'>AC</button>
            <button className='cal-key key-sign'>?</button>
            <button className='cal-key key-percent'>%</button>
              <button className='cal-key key-divide key-operations'>/</button>
          </div>

          <div className='digit-keys'>
            <div className='top-row'>
              <button className='cal-key key-7' onClick={this.handleClick} label='seven' value='seven'>7</button>
              <button className='cal-key key-8' onClick={this.handleClick} label='eight' value='eight'>8</button>
              <button className='cal-key key-9' onClick={this.handleClick} label='nine' name='nine' value='nine'>9</button>
              <button className='cal-key key-multiply key-operations'>x</button>

            </div>
            <div className='2nd-row'>
              <button className='cal-key key-4' onClick={this.handleClick} label='four' value='four'>4</button>
              <button className='cal-key key-5' onClick={this.handleClick} label='five' value='five'>5</button>
              <button className='cal-key key-6' onClick={this.handleClick} label='six' value='six'>6</button>
              <button className='cal-key key-divide key-operations'>+</button>
            </div>

            <div className='3rd-row'>
              <button className='cal-key key-1' onClick={this.handleClick} label='one' value='one'>1</button>
              <button className='cal-key key-2' onClick={this.handleClick} label='two' value='two'>2</button>
              <button className='cal-key key-3' onClick={this.handleClick} label='three' value='three'>3</button>
              <button className='cal-key key-subtract key-operations'>-</button>

            </div>


            <button className='cal-key key-0' onClick={this.handleClick} label='0' value='0'>0</button>
            <button className='cal-key key-decimal' onClick={this.handleClick} label='decimal' value='decimal'>.</button>

            <button className='cal-key key-equals'>=</button>


          </div>
        </div>

        <div className='operator-keys'>





        </div>

      </div>
      {/* ends keypad */}
    </div>)
  }
}

export default Calculator;
