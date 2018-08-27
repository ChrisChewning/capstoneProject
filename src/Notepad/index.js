import React, {Component} from 'react';
import {Button, Form, Icon, Row, Input} from 'react-materialize'
import firebase from 'firebase';
import { connect } from 'react-firebase';

class Notepad extends Component {
  constructor(){
    super();
    this.state = {
      // notes: [],
      title: '',
      text: '',
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
    this.setState({[e.target.name]:e.target.value});
  }


  newNote(e){
    e.preventDefault();
    console.log('newNote:', this.newNote);
  }


  postNote(e){   //onSubmit fn.
    e.preventDefault();
    console.log('post:', this.postNote);
    const notesRef = firebase.database().ref('notes'); //creates space in firebase db.
    const note = {
      title: this.state.title,
      user: this.state.text
    }
    notesRef.push(note); //sends a copy of our object to store in Firebase.
    this.setState({
      title: '',
      text: ''
    });
  }





  componentDidMount() {
     const notesRef = firebase.database().ref('items');
     notesRef.on('value', (snapshot) => {
       let items = snapshot.val();
       let newState = [];
       for (let item in items) {
         newState.push({
           id: item,
           title: items[item].title,
           text: items[item].text
         });
       }
       this.setState({
         items: newState
       });
     });
   }
   removeItem(itemId) {
     const itemRef = firebase.database().ref(`/items/${itemId}`);
     itemRef.remove();
   }

    // const note = {
    //   title: this.state.title,
    //   text: this.state.text
    // }


    // const note = { //whole note object.  .value is the actual text.
    //   title: this.noteTitle,
    //   text: this.noteText, //.value?
    // }

//ALL WORKING
    // const newNotes = Array.from(this.state.notes);
    // newNotes.push(note);
    // this.setState({notes: newNotes});  //only setting state once the new note has been pushed.
    // console.log(this);
   // }




   deleteNote(e){
     e.preventDefault();
     console.log('delete:', this.deleteNote);
   }

   editNote(e){
     e.preventDefault();
     console.log('edit:', this.editNote);
   }

   closeNote(e){
     e.preventDefault();
     console.log('close:', this.closeNote);
   }


  render() {
    console.log('this is title:', this.state.title);
    console.log('this is text:', this.state.text);  //EMPTY ARRAY
    return (
      <div className='notesContainer'>
        <div onClick={this.newNote}>
          <Icon className='addNewNote'>add_to_photos</Icon>
        </div>


        <form onSubmit={this.postNote} className='note'>
          <div className='notesIcons'>
            <div onClick={this.deleteNote}>
          <Icon extra-small onClick={this.deleteNote}>delete</Icon>
          </div>
          <div onClick={this.editNote}>
          <Icon extra-small>edit</Icon>
          </div>
          <div onClick={this.closeNote}>
          <Icon extra-small>close</Icon>
          </div>
        </div>


          <Row>
            <Input s={8} type='text' className='noteTitle' name='title' onChange={this.handleChange} value={this.state.title} label='Title'  />
          </Row>

          <Row>
            <Input s={12} className='noteText' name='text' onChange={this.handleChange} value={this.state.text} label='Text'   />
        </Row>


          <Button waves='light' type='submit' value='add new note'>Submit</Button>
        </form>

      </div>
    )}
}

export default Notepad;
