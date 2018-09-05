import React, {Component} from 'react';
import {Button, Form, Icon, Row, Input} from 'react-materialize'
// import firebase from 'firebase';
import firebase from '../Fire';
import {connect} from 'react-firebase';
import Firebase  from '../Firebase';
import Modal from 'react-modal';
import AddToCalendar from 'react-add-to-calendar';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      due: '',
      text: '',
      notes: [],
      modalIsOpen: false,
    }
    this.newNote = this.newNote.bind(this); //react docs best-practice.
    this.postNote = this.postNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    firebase.database().ref().on('value', (res) => {
      console.log(res.val());
    });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }



//=================  NEW NOTE POPS FROM TOP RIGHT TO INPUT DATA. ==============
  newNote(e) {
    e.preventDefault();
    this.setState({modalIsOpen: true});
    console.log('newNote:', this.newNote);
  }

  //=========================  CLOSE NOTE.  ======================
  closeModal(e) {
    e.preventDefault();
    this.setState({modalIsOpen: false})
    console.log('modalIsOpen:', this.state.modalIsOpen);
  }

//======================  POST & CREATE SPACE IN FIREBASE.  ===================

            //note: there are no objects in firebase.
    postNote(e) { //onSubmit fn.
    e.preventDefault();
    const notesRef = firebase.database().ref('notes'); //Listener.
    const note = {
      due: this.state.due,
      text: this.state.text
    }
    notesRef.push(note); //sends a copy of our object to store in Firebase.
    this.setState({due: '', text: ''}); //set the state back to empty.
    this.setState({modalIsOpen: false})
  }

  //=================  LOAD ALL THE NOTES when the page loads.  ==============

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



  //=================  DELETE THE NOTES FROM FIREBASE.  ==============
  removeNote(noteId) {
    const noteRef = firebase.database().ref(`/notes/${noteId}`);
    noteRef.remove();
  }


  //======================  RENDER YOUR FORM.  ============================

  render() {
    let event = {
        title: 'Sample Event',
        description: 'example',
        location: 'Austin, TX',
        startTime: '2018-09-08T20:15:00-04:00',
        endTime: '2018-09-08T21:45:00-04:00'
    }
    return (
      <div className='notesContainer'>

      {/* <div onClick={this.newNote}> */}

      <div className='addNewNote'>
        <Button onClick={this.newNote} id="noteBtn">New Note</Button>
        <Button>
          <AddToCalendar event={event} />
        </Button>
      </div>


<div className='note'>
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="To Do Modal"
        >
          <button onClick={this.closeModal}>close</button>

        <form onSubmit={this.postNote}>
          <Row>
            <Input s={8} type='text' className='noteTitle' name='due' onChange={this.handleChange} value={this.state.due}  label='Due by:'/>
          </Row>

          <Row>
            <Input s={12} className='noteText' name='text' onChange={this.handleChange} value={this.state.text}   label='What:'/>
          </Row>

          <Button waves='light' type='submit' value='add new note'>Let's Do It!</Button>
        </form>
      </Modal>
      </div>


      <section className='display-note'>
        <div className="wrapper">
          <ul>
            {
              this.state.notes.map(note => {
                return (<li key={note.id}>
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
