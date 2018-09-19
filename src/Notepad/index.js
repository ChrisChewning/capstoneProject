import React, {Component} from 'react';
import {Button, Form, Icon, Row, Input} from 'react-materialize';
import firebase from 'firebase';
import {connect} from 'react-firebase';


class Notepad extends Component {
  constructor() {
    super();
    this.state = {
      notepad: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  //FOR LATER: Autosave use setInterval in componentDidMount
  //https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }); // computed properties.
  }

  //UPDATES
  handleSave(e) {
    e.preventDefault();
    var user = this.props.uid;
    const notepadRef = firebase.database().ref(`/users/${user}/notepadNote`); //ref method carves out space. 'notepad' is the destination we make in that space.
    const notepadVar = {
      notepad: this.state.notepad
    }; //destructures to send to fb.
    notepadRef.set(notepadVar); //replaces, like put. updates is like patch.
    // this.setState({notepad: notepad}); doesnt work bc state is now an object. renders [object Object]
  }

  componentDidMount() {
    var user = this.props.uid;
    const notepadNotesRef = firebase.database().ref(`/users/${user}/notepadNote`);
    notepadNotesRef.on('value', (snapshot) => { //event listener auto updates.
      let notepadNotes = snapshot.val(); //listener
      this.setState({notepad: notepadNotes.notepad})
    })
  }

  render() {
    return (<div className='notepadContainer'>
      <div class="row">
        <div class="row">
          <form class="col s12" className='notepad' onSubmit={this.handleSave}>
            <div class="row">
              <div class="input-field col s12">
                <textarea style={{
                    height: '80vh'
                  }} id="textarea" onChange={this.handleChange} name="notepad" value={this.state.notepad} class="materialize-textarea"></textarea>
                <label for="textarea" class='active'>Don't forget to save your note!</label>
              </div>
            </div>
            <Button type='submit' value='save' className='btnSave'>Save</Button>
          </form>
          <p>{this.notepadVar}</p>
        </div>
      </div>
    </div>)
  }
}
export default Notepad;
