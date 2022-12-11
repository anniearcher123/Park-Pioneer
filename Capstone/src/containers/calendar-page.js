import React from 'react';
import MyCalendar from './calendar';
import Header from './header-component';


function CalendarPage() {
    return(
        <div>
           <Header />
           <MyCalendar/>
        </div>
    )
}

export default CalendarPage;