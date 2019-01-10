import React, {Component} from 'react';
import {Button, Form, Icon, Row, Input} from 'react-materialize'
import firebase from '../FirebaseConfig';
import {connect} from 'react-firebase';
import Modal from 'react-modal';
import AddToCalendar from 'react-add-to-calendar';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      due: '',
      text: '',
      notes: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.newNote = this.newNote.bind(this);
    this.postNote = this.postNote.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //===============  NEW NOTE POPS FROM TOP RIGHT TO INPUT DATA. ==============
  newNote(e) {
    e.preventDefault();
    this.setState({modalIsOpen: true});
    console.log(this.state.modalIsOpen);
  }

  //======================  POST & CREATE SPACE IN FIREBASE.  ==================

  postNote(e) {
    e.preventDefault();
    var user = this.props.uid;
    const notesRef = firebase.database().ref(`/users/${user}/notes`);
    const note = {
      due: this.state.due,
      text: this.state.text
    }
    notesRef.push(note); //sends a copy of our object to store in Firebase.
    this.setState({due: '', text: ''}); //set the state back to empty.
    this.setState({modalIsOpen: false}) //close the modal.
  }

  //=================  LOAD ALL THE NOTES when the page loads.  ==============

//getNotes is its own method outside of componentDidMount b.c things were loading asynchronously & the call for the notes was only happening on componentDidMount. It only helps right when it mounts and on refresh or in the url path it had null.

  componentWillReceiveProps(nextProps) { //whenever props changes it makes the componenent update. componentWillReceiveProps catches it right when it updates and says here's the props I have and the nextProps. If one changes do something.

    if (this.props.uid !== nextProps.uid) {
      this.getNotes(nextProps.uid);
    }
  }

  componentDidMount() { //only happens immediately after it shows up. mounts: gets on the page. this is why refresh or url paths don't work. it's like 'I did my job already.'
    this.getNotes(this.props.uid);
    console.log('component mounted!');
  }

  getNotes = (userId) => {
    var user = userId;
    const notesRef = firebase.database().ref(`/users/${user}/notes`);
    notesRef.on('value', (snapshot) => { //overview of notes in db.
      let notes = snapshot.val(); //listener
      console.log('notes: ', notes);
      let newState = []; //instatiate & populate with our data.
      for (let note in notes) { //loop over & push results into one object.
        newState.push({id: note, due: notes[note].due, text: notes[note].text});
        //create an individual note here.
      }
      this.setState({ //update state with all the notes in our db.
        notes: newState
      });
    })
  }

  //=================  DELETE THE NOTES FROM FIREBASE.  ==============
  //link: https://firebase.google.com/docs/database/web/read-and-write

  removeNote(noteId) {
    var user = this.props.uid;
    const noteRef = firebase.database().ref(`users/${user}/notes/${noteId}`);
    noteRef.remove();
  }

  //======================  RENDER YOUR FORM.  ============================

  render() {
    console.log(this.state.notes);
    console.log(this.props.user, 'this is user');

    let event = {
      title: 'Sample Event',
      description: 'example',
      location: 'Austin, TX',
      startTime: '2018-09-23T20:15:00-04:00',
      endTime: '2018-09-23T21:45:00-04:00'
    }

    return (<div className='notesContainer'>
      <div className='addNewNote'>
        <Button onClick={this.newNote} id="noteBtn">New Note</Button>
        <Button>
          <AddToCalendar event={event}/>
        </Button>
      </div>

      <div>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel="ToDoModal">
          <div className='modal-close'>
            <Button onClick={() => this.setState({modalIsOpen: false})}>X</Button>
          </div>
          <form onSubmit={this.postNote}>
            <Row>
              <Input s={8} type='text' className='noteTitle' name='due' onChange={this.handleChange} value={this.state.due} label='Due by:'/>
            </Row>
            <Row>
              <Input s={12} className='noteText' name='text' onChange={this.handleChange} value={this.state.text} label='What:'/>
            </Row>
            <Button waves='light' type='submit' value='add new note'>Let's Do It!</Button>
          </form>
        </Modal>
      </div>

      <section className='display-note'>
        <div className="wrapper">
          <ul>
            {
              this.state.notes.reverse().map(note => {
                return (<li className='noteLi' key={note.id}>
                  <div className="note">
                    <div className='noteTitle'>{note.due}</div>
                    <div className='noteText'>{note.text}</div>
                    <div>
                      <Button onClick={() => this.removeNote(note.id)}>Delete</Button>
                    </div>

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

export default ToDoList;
