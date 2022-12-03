import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useContext } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AppContext } from "../context/context";
import Header from "./header-component";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Test",
        start: new Date(2022, 11, 1, 1, 0, 0),
        end: new Date(2022, 11, 1, 10, 3,0)
    },
    {
        title: "Vacation",
        start: new Date(2022, 6, 7),
        end: new Date(2022, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2022, 6, 20),
        end: new Date(2022, 6, 23),
    },
];

function MyCalendar() {
    const {isLoggedIn, SetIsLoggedIn} = useContext(AppContext);
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("Times Overlapping"); 
                break;
             }
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
        console.log(allEvents)
    }

    return (
        <div>
            <Header/>
            <div className="text-center">
                <h1>My Calendar</h1>
                <h2>Add Event</h2>
                <div className="d-flex">
                    <div className="col">
                        <input type="text" require className="" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                        
                        <DatePicker 
                            popperPlacement="bottom position-absolute" 
                            placeholderText="Start Date"  
                            selected={newEvent.start} 
                            onChange={(start) => setNewEvent({ ...newEvent, start })} 
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={20}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"/>
                            
                        <DatePicker 
                            popperPlacement="bottom position-absolute" 
                            className="mb-3" 
                            popperClassName="" 
                            placeholderText="End Date" 
                            selected={newEvent.end} 
                            onChange={(end) => setNewEvent({ ...newEvent, end })} 
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={20}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"/>

                        <button className="btn btn-warning" type="submit" onClick={handleAddEvent}>
                            Add
                        </button>
                    </div>
                </div>
                <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
            </div>
        </div>
    );
}

export default MyCalendar;