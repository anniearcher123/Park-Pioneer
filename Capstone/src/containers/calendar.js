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



function MyCalendar() {
    const {Events, SetEvents, newEvent, setNewEvent, allEvents, setAllEvents} = useContext(AppContext);
    const [selectedEvent, setSelectedEvent] = useState(undefined)
    const [updatedEvent, setUpdatedEvent] = useState(undefined)
    const [modalState, setModalState] = useState(false)

    function handleAddEvent() {
        if (newEvent.title !== "" && newEvent.start !== "" && newEvent.end !== ""){
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
        setNewEvent({ title: "", start: "", end: "" })
        console.log(allEvents)
    } else {
            alert('Complete all fields')
            console.log(allEvents)
        }
    }

    function handleEventSelection (e) {
        setUpdatedEvent(e)
        setSelectedEvent(e)
        setModalState(true)
    }

    function deleteEvent () {
        let deleteThis = allEvents.filter(x => x !== selectedEvent)
        setAllEvents(deleteThis);
        closeModal()
    }

    function updateEvent () {
        let updateThis = allEvents.filter(x => x !== selectedEvent)
        updateThis.push(updatedEvent)
        console.log(updateThis)
        setAllEvents(updateThis)
        closeModal()
    }

    function closeModal () {
        setSelectedEvent(undefined)
        setModalState(false)
    }

    const Modal = () => {
        return (
           <div className={`modal-${modalState === true ? 'show' : 'hide'}`}>
              <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{selectedEvent.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for='startDate'>Start Date:</label>
                                    <DatePicker 
                                        id="startDate"
                                        popperPlacement="position-absolute" 
                                        placeholderText={selectedEvent.start} 
                                        selected={updatedEvent.start} 
                                        onChange={(start) => setUpdatedEvent({ ...updatedEvent, start })} 
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={20}
                                        timeCaption="time"
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="endDate">End Date:</label>
                                    <DatePicker 
                                        id="endDate"
                                        popperPlacement="position-absolute" 
                                        className="mb-3" 
                                        popperClassName="" 
                                        placeholderText={selectedEvent.end}
                                        selected={updatedEvent.end} 
                                        onChange={(end) => setUpdatedEvent({ ...updatedEvent, end })} 
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={20}
                                        timeCaption="time"
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={updateEvent}>Update event</button>
                            <button type="button" className="btn btn-danger" onClick={deleteEvent}>Delete event</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
           </div>
        )
    }

    return (
        <div>
            <div className="text-center">
                <h1>My Calendar</h1>
                <h2>Add Event</h2>
                <div className="d-flex">
                    <div className="col">
                        <input type="text" required className="" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                        
                        <DatePicker 
                            popperPlacement="position-absolute" 
                            placeholderText="Start Date"  
                            popperClassName="m-5 position-fixed datePopper"
                            selected={newEvent.start} 
                            onChange={(start) => setNewEvent({ ...newEvent, start })} 
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={20}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"/>
                            
                            
                        <DatePicker 
                            popperPlacement="position-absolute" 
                            className="mb-3" 
                            popperClassName="m-5 position-sticky datePopper" 
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
                {selectedEvent && <Modal />}
                <Calendar 
                    localizer={localizer} 
                    events={allEvents} 
                    startAccessor="start" 
                    endAccessor="end" 
                    onSelectEvent={handleEventSelection}
                    style={{ height: 500, margin: "50px" }} />
            </div>
        </div>
    );
}

export default MyCalendar;