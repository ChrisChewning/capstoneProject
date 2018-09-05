import React, {Component} from 'react';
import {Button, Form, Icon, Row, Input} from 'react-materialize'
import firebase from 'firebase';
import {connect} from 'react-firebase';
import BigCalendar from 'react-big-calendar';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AddToCalendar from 'react-add-to-calendar';




class Calendar extends Component {
  constructor () {
    super()
    BigCalendar.momentLocalizer(moment); //could also use globalizeLocalizer
    this.state = {
      start: '',
      end: ''
    }
  }


//SUBMIT
  handleSubmit = (e) => {
  e.preventDefault()
  this.props.onAddState({
    start: new Date(moment(this.state.start).format()),
    end: new Date(moment(this.state.end).format())
  })
  this.setState({
    start: "",
    end: ""
  })
}


handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value});
}
  // handleStartChange = (ev) => {...
  // handleEndChange = (ev) => {...


  render() {
    console.log(this.handleChange);
    let event = {
        title: 'Sample Event',
        description: 'example',
        location: 'Austin, TX',
        startTime: '2018-09-08T20:15:00-04:00',
        endTime: '2018-09-08T21:45:00-04:00'
    }
        // console.log(this.state.start);
            // console.log(this.handleSubmit, 'click');
    return (
      <div>
      <BigCalendar
        style={{height: '800px', width: '800px', margin: '0px 300px'}}
        // events={['month', 'day', 'agenda']}
        // events={myEventsList}
         // events={[]}
         events={[
        {
          'title': 'My event',
          'allDay': false,
          'start': new Date(2018, 7, 4, 8, 0), // 10.00 AM
          'end': new Date(2018, 7, 4, 21, 0), // 2.00 PM
        }
      ]}
   views={['week', 'month']}
   step={60}
   selectable={true}
   min={new Date(2008, 0, 1, 8, 0)} // 8 AM
   max={new Date(2008, 0, 1, 21, 0)} //8 PM
        drilldownView="agenda"
        // events={myEventsList}
      startAccessor='2008, 0, 1, 8, 0'
      endAccessor='2008, 0, 1, 21, 0'
      />
{/* <AddToCalendar event={event} /> */}

      <form onSubmit={this.handleSubmit}>

        <label>Start Date</label>
        <input type='date' value={this.state.start} onChange={this.handleChange} />

        <label> End Date </label>
        <input type='date' value={this.state.end} onChange={this.handleChange} />


        <label> Time </label>
        <input type='time' value={this.state.time}
          onChange={this.handleChange} />

          <input type='submit' value='submit' />

      </form>



    </div>
)}
}


// const events = [
//      {
//    title: 'All Day Event very long title',
//    startDate: new Date(2018, 1, 1),
//    endDate: new Date(2018, 1, 2),
//  },

// const Calendar = props => (
//   <div>
//     <BigCalendar
//       // events={myEventsList}
//       startAccessor='startDate'
//       endAccessor='endDate'
//     />
//   </div>
// );

export default Calendar;
