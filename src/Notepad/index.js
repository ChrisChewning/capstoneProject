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
      }
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
}

//Connects to the firebase backend.
componentDidMount() {
  firebase.database().ref().on('value', (res) => {
    console.log(res.val());
  });
}


handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value});
  // computed properties. Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
}


//UPDATES
handleSave(e) {
  e.preventDefault();



  console.log('handleSave is clicked');
  const notepadRef = firebase.database().ref('notepadNotes'); //ref method carves out space. 'notepad' is the destination we make in that space.
  const notepad = {notepad: this.state.notepad}; //destructures to send to fb.
  notepadRef.set(notepad); //.set updates, not adds or creates unique id.
  // this.setState({notepad: notepad}); doesnt work bc state is now an object. ex: notepad: test2
}

updateNotepad(notepadId) {
  const notepadRef = firebase.database().ref(`/notepadNotes/${notepadId}`);
  notepadRef.set();
}



componentDidMount() {
  const notepadRef = firebase.database().ref('notepadNotes');
  notepadRef.on('value', (snapshot) => { //overview of notes in db.
    let notepadNotes = snapshot.val(); //listener
    // let newState = []; //instatiate & populate with our data.
    // for (let notepad in notepadNotes) { //loop over & push results into one object.
    //   newState.push({id: notepad});
// }
    // this.setState({notepad: notepad});
  // }
  });
}





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
      <Button type='submit' value='update' className='btnSave' onSubmit={this.updateNotepad}>Update</Button>
    </form>
  </div>

    </div>

  </div>
  )}

}
export default Notepad;
