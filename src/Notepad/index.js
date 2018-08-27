import React, {Component} from 'react';
import {Button, Form, Icon, Row, Input} from 'react-materialize'

class ToDoList extends Component {

  render() {
    return (
      <div className='notesContainer'>
          <Icon className='addNewNote'>add_to_photos</Icon>

        <form className='note'>
          <div className='notesIcons'>
          <Icon extra-small>delete</Icon>
          <Icon extra-small>edit</Icon>
          <Icon extra-small>close</Icon>
        </div>
          <Row><Input s={8} type='' className='noteTitle' label='Title' /></Row>
          <Row><Input s={12} type='textarea' className='note' label='Text' /></Row>
          <Button waves='light' type='submit'>Submit</Button>
        </form>

      </div>
    )}
}

export default ToDoList;
