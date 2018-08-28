import React, {Component} from 'react';
import {Button, Form, Icon, Row, Input} from 'react-materialize'
import firebase from 'firebase';
import {connect} from 'react-firebase';


class Notepad extends Component {
  constructor(){
    super();
    this.state = {
      notepad: '',
      timeout: null,
    value: '',
    saved: false,
      }
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
}


handleSave = (e) => {
  e.preventDefault();
  console.log('handleSave is clicked');
  const notepadRef = firebase.database().ref('notepad');
}

//
componentDidMount() {

}



// const SaveMessage = ({visible}) => <div className={'saved' + (visible ? ' saved-visible' : '')}><p>Saved Successfully</p></div>
//
//
// const resetTimeout = (id, newID) => {
//   clearTimeout(id)
//   return newID
// }
//
// editValue = value => {
//   this.setState({timeout: resetTimeout(this.state.timeout, setTimeout(this.saveValue, 400)), value: value})
// };
//
// saveValue = () => {
//     this.setState({...this.state, saved: true})
//     setTimeout(() => this.setState({...this.state, saved: false}), 1000)
//   };


//ISSUE 1: AUTOSAVE
//link: https://codepen.io/Lance-Jernigan/pen/qrxmpp





  render() {







    console.log(this.state.notepad);
    return (
      <div className='notepadContainer'>


{/* ISSUE 2 */}

{/* docs: You must have an .input-field div wrapping your input and label. This is only used in our Input and Textarea form elements. */}

{/* LINK: https://materializecss.com/text-inputs.html */}
{/* jQuery code: {/* $(".materialize-textarea").trigger("autoresize") */}


      <div class="row">
    <form class="col s12" className='notepad' onSubmit={this.handleSave}>
      <div class="row">
        <div class="input-field col s12">

          <textarea id="notepadTA" class="materialize-textarea"></textarea>
          <label for="textarea1" class='active'>Don't forget to wait for your note to save!</label>
        </div>
      </div>
      <Button waves='light' type='submit' value='save the note!'>Submit</Button>
    </form>
  </div>

    </div>)
  }
}

export default Notepad;
