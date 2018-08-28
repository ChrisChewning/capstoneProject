import React, {Component} from 'react';
import {Button, Form, Icon, Row, Input} from 'react-materialize'
import firebase from 'firebase';
import {connect} from 'react-firebase';

class Notepad extends Component {
  constructor() {
    super();
    this.state = {
      due: '',
      text: '',
      notes: []
    }
    this.newNote = this.newNote.bind(this); //react docs best-practice.
    this.postNote = this.postNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.closeNote = this.closeNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    firebase.database().ref().on('value', (res) => {
      console.log(res.val());
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  newNote(e) {
    e.preventDefault();
    console.log('newNote:', this.newNote);
  }

  postNote(e) { //onSubmit fn.
    e.preventDefault();
    // console.log('post:', this.postNote);
    const notesRef = firebase.database().ref('notes'); //creates space in firebase db. note: there are no objects in firebase.
    const note = {
      due: this.state.due,
      text: this.state.text
    }
    notesRef.push(note); //sends a copy of our object to store in Firebase.
    this.setState({due: '', text: ''});
  }

  //START tracking notes when page loads.
  componentDidMount() {
    const notesRef = firebase.database().ref('notes');
    notesRef.on('value', (snapshot) => { //overview of notes in db.
      let notes = snapshot.val(); //listener
      let newState = []; //instatiate & populate with our data.
      for (let note in notes) { //loop over & push results into one object.
        newState.push({id: note, due: notes[note].due, text: notes[note].text});
      }
      this.setState({ //update state with all the notes in our db.
        notes: newState
      });
    });
  }

  removeNote(noteId) {
    const noteRef = firebase.database().ref(`/notes/${noteId}`);
    noteRef.remove();
  }

  deleteNote(e) {
    // e.preventDefault();
    console.log('delete:', this.deleteNote);
  }

  editNote(e) {
    e.preventDefault();
    console.log('edit:', this.editNote);
  }

  closeNote(e) {
    e.preventDefault();
    console.log('close:', this.closeNote);
  }

  render() {
    console.log('this is due:', this.state.due);
    console.log('this is text:', this.state.text);
    console.log('notes state:', this.state.notes);
    return (<div className='notesContainer'>
      <div onClick={this.newNote}>
        <Icon className='addNewNote'>add_to_photos</Icon>
      </div>

      <div className='note'>
        <form onSubmit={this.postNote}>
          {/* form onSubmit={this.postNote}className='note'> */}
          <div className='notesIcons'>
            <div onClick={this.deleteNote}>
              <Icon extra-small="extra-small" onClick={this.deleteNote}>delete</Icon>
            </div>
            <div onClick={this.editNote}>
              <Icon extra-small="extra-small">edit</Icon>
            </div>
            <div onClick={this.closeNote}>
              <Icon extra-small="extra-small">close</Icon>
            </div>
          </div>

          <Row>
            <Input s={8} type='text' className='noteTitle' name='due' onChange={this.handleChange} value={this.state.due}  label='Due by:'/>
          </Row>

          <Row>
            <Input s={12} className='noteText' name='text' onChange={this.handleChange} value={this.state.text}   label="What:"/>
          </Row>

          <Button waves='light' type='submit' value='add new note'>Submit</Button>
        </form>
      </div>

      <section className='display-note'>
        <div className="wrapper">
          <ul>
            {
              this.state.notes.map(note => {
                return (<li key={note.id}>
                  <div className="note">

                    <div>
                      <Button onClick={() => this.removeNote(note.id)}>delete</Button>
                    </div>

                    {/* <button>
                          <Icon extra-small onClick={this.deleteNote}>delete</Icon>
                      </button> */
                    }

                    <div className='noteTitle'>{note.due}</div>
                    <div className='noteText'>{note.text}</div>

                  </div>
                </li>)
              })
            }
          </ul>
        </div>
      </section>

    </div>)
  }
}

export default Notepad;
