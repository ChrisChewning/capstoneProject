import React, {Component} from 'react';
import {Button, Form, Icon, Row, Input} from 'react-materialize'

class ToDoList extends Component {
  constructor(){
    super();
    this.addNote = this.addNote.bind(this); //react docs best-preactice.
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.closeNote = this.closeNote.bind(this);
  }


  addNote(){
    console.log('add:', this.addNote);
   }

   deleteNote(){
     console.log('delete:', this.deleteNote);
   }

   editNote(){
     console.log('edit:', this.editNote);
   }

   closeNote(){
     console.log('close:', this.closeNote);
   }


  render() {
    return (
      <div className='notesContainer'>
        <div onClick={this.addNote}>
          <Icon className='addNewNote'>add_to_photos</Icon>
        </div>

        <form className='note'>
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
          <Row><Input s={8} type='' className='noteTitle' label='Title' /></Row>
          <Row><Input s={12} type='textarea' className='note' label='Text' /></Row>
          <Button waves='light' type='submit'>Submit</Button>
        </form>

      </div>
    )}
}

export default ToDoList;
