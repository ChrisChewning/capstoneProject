import React, {Component} from 'react';
import {Button, Form, Icon, Row, Input} from 'react-materialize'

class Notepad extends Component {
  constructor(){
    super();

    this.state = {
      notes: [],
    }


    this.newNote = this.newNote.bind(this);
    this.postNote = this.postNote.bind(this); //react docs best-preactice.
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.closeNote = this.closeNote.bind(this);
  }

  newNote(e){
    e.preventDefault(e);
    console.log('newNote:', this.newNote);
  }

  postNote(e){
    e.preventDefault(e);
    console.log('post:', this.postNote);

    //Take the whole note object, which includes the title and the text.
    const note = {
      title: this.noteTitle.value,
      text: this.noteText.value

    }
    //copying our notes array in state.
    const newNotes = Array.from(this.state.notes);
    newNotes.push(note); //now push our note.
    this.setState({notes: newNotes}); //now this.state.notes has the value of newNotes, which is all the notes.
    // console.log(this.state.notes);
console.log(this.state.notes);
   }




   deleteNote(e){
     e.preventDefault(e);
     console.log('delete:', this.deleteNote);
   }

   editNote(e){
     e.preventDefault(e);
     console.log('edit:', this.editNote);
   }

   closeNote(e){
     e.preventDefault(e);
     console.log('close:', this.closeNote);
   }


  render() {
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
          <Row><Input s={8} type='text' className='noteTitle' name='noteTitle' ref={ref => this.noteTitle = ref} label='Title' /></Row>
          <Row><Input s={12} type='text' className='note' name='noteText' ref={ref => this.noteText = ref}  label='Text' /></Row>
          <Button waves='light' type='submit'>Submit</Button>
        </form>

      </div>
    )}
}

export default Notepad;
