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
      saved: false,
      }
    this.handleChange = this.handleChange.bind(this); //bind so we get access to this.
    this.handleSave = this.handleSave.bind(this);

}


handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value});
  // computed properties. Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
}



//Connects to the firebase backend.
componentDidMount() {
  firebase.database().ref().on('value', (res) => {
    console.log(res.val());
  });
}




handleSave(e) {
  e.preventDefault();
  console.log(this.handleSave, 'handleSave is clicked');
  const notepadRef = firebase.database().ref('notepadNotes'); //ref method carves out space. 'notepad' is the destination we make in that space.

  const notepad = {notepad: this.state.notepad};
  notepadRef.push(notepad); //sends a copy to Firebase.
  // this.setState({notepad: notepad});
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
// //
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

<div class="row">
      <div class="row">
    <form class="col s12" className='notepad' onSubmit={this.handleSave}>
      <div class="row">
        <div class="input-field col s12">
          <textarea style={{ height: '80vh' }} id="textarea" onChange={this.handleChange} name="notepad" value={this.state.notepad} class="materialize-textarea"></textarea>
          <label for="textarea" class='active'>Don't forget to wait for your note to save!</label>
        </div>
      </div>
      <Button type='submit' value='save' className='btnSave'>Save</Button>
    </form>
  </div>

    </div>

  </div>
  )}

}
export default Notepad;
