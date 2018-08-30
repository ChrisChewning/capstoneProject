import React, {Component} from 'react';
import {Button, Form, Icon, Row, Input} from 'react-materialize'
import firebase from 'firebase';
import {connect} from 'react-firebase';

import Firebase from '../Firebase';


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
  // const notepadRef = firebase.database().ref('notepad');
}


// FROM TO-DO NOTES
// postNote(e) { //onSubmit fn.
// e.preventDefault();
// const notesRef = firebase.database().ref('notes'); //Listener.
// const note = {
//   due: this.state.due,
//   text: this.state.text
// }
// notesRef.push(note); //sends a copy of our object to store in Firebase.
// this.setState({due: '', text: ''}); //set the state back to empty.
// }






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
      <div class="row">
    <form class="col s12" className='notepad' onSubmit={this.handleSave}>
      <div class="row">
        <div class="input-field col s12">
          <textarea style={{ height: '80vh' }} id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1" class='active'>Don't forget to wait for your note to save!</label>
        </div>
      </div>
      <Button waves='light' type='submit' value='save the note!'>Submit</Button>
    </form>
  </div>

    </div>
  </div>
  )}


}
export default Notepad;
