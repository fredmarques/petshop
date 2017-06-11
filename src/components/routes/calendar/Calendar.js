import React, { Component } from 'react';
import './react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
const myEventsList = [];
const MyCalendar = props => (
  <div>
    <BigCalendar
      events={myEventsList}
      startAccessor={new Date(2014, 0, 1)}
      endAccessor={new Date(2050, 0, 1)}
    />
  </div>
);
class Calendar extends Component {
    render() {
        return (
            <div className={"rbc-calendar demo"}>
               <MyCalendar/>
            </div>
        );
    }
}

export default Calendar;