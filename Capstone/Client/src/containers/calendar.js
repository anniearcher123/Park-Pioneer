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
import Modal from 'react-bootstrap/Modal';


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
    const {allEvents, setAllEvents, username} = useContext(AppContext);
    const [selectedEvent, setSelectedEvent] = useState(undefined)
    const [updatedEvent, setUpdatedEvent] = useState(undefined)
    const [addEvent, setAddEvent] = useState({ title: "", start: "", end: "" })
    const [showModal, setShowModal ] = useState(false)
    const [showUpdateModal, setShowUpdateModal ] = useState(false)

    function handleAddEvent() {
        if (username){
            if (addEvent.title !== "" && addEvent.start !== "" && addEvent.end !== ""){
            for (let i=0; i<allEvents.length; i++){

                const d1 = new Date (allEvents[i].start);
                const d2 = new Date(addEvent.start);
                const d3 = new Date(allEvents[i].end);
                const d4 = new Date(addEvent.end);

                if (
                ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                    (d4 <= d3) )
                )
                {   
                    alert("Times Overlapping"); 
                    break;
                }
        
            }
            
            
            setAllEvents([...allEvents, addEvent]);
            setAddEvent({ title: "", start: "", end: "" })
            console.log(allEvents)
            closeModal()
            addToDB()
            } else {
                alert('Complete all fields')
                console.log(allEvents)
                }
        } else {
            alert('Please Log In!')
        }

        }

    function handleEventSelection (e) {
        setUpdatedEvent(e)
        setSelectedEvent(e)
        setShowUpdateModal(true)
    }

    function deleteEvent () {
        let deleteThis = allEvents.filter(x => x !== selectedEvent)
        setAllEvents(deleteThis);
        closeModal()
        addToDB()
    }

    function updateEvent () {
        let updateThis = allEvents.filter(x => x !== selectedEvent)
        updateThis.push(updatedEvent)
        console.log(updateThis)
        setAllEvents(updateThis)
        closeModal()
        addToDB()
    }

    function closeModal () {
        setSelectedEvent(undefined)
        setShowModal(false)
        setShowUpdateModal(false)
    }

    function addToDB () {
            fetch('http://localhost:4000/', { 
                  method: 'POST',
                  headers: {'Content-Type':'application/json'},
                  body: JSON.stringify({
                    username: username,
                    events: allEvents})
            })
            .then((response) => {
              return response.json()
            })
            .then((body) => {
              alert(body.message)
            })
          }
    

    const UpdateModal = () => {
        return (
            <Modal
                show={showUpdateModal}
                onHide={() => setShowUpdateModal(false)}
                >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {selectedEvent.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                <form>
                        <div className="form-group">
                            <label className="heading" for='startDate'>Start Date:</label>
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
                                className="date-info"
                            />
                        </div>
                        <div className="form-group">
                            <label className="heading" for="endDate">End Date:</label>
                            <DatePicker 
                                id="endDate"
                                popperPlacement="position-absolute" 
                                className="mb-3 date-info" 
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
                </Modal.Body>
                <div className="row-3 text-center m-2 ">
                    <button type="button" className="mx-1 btn btn-dark col-4" onClick={updateEvent}>Update event</button>
                    <button type="button" className="mx-1 btn btn-dark col-4" onClick={deleteEvent}>Delete event</button>
                    <button type="button" className="mx-1 btn btn-dark col-2" data-dismiss="modal" onClick={closeModal}>Close</button>
                </div>
            </Modal>
        )
    }

    function styleEvents() {
        var style = {
            backgroundColor: '#043927',
            borderRadius: '5px',
            opacity: 0.8,
            color: 'white',
            border: '0px',
            display: 'block'
        };
        return {
            style: style
        };
    }

    return (
        <div>
            <div className="text-center">
                <h1>My Calendar</h1>
                <hr className="line"></hr>
                <div className="text-center">
                    <button className="btn btn-dark" type="submit" onClick={()=>setShowModal(true)}>
                        Add
                    </button>

                    <Modal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Add New Event
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="text-center">
                            <form className="d-block">
                                <div className="form-group row-6">
                                    <label className="heading" for='Title'>Event Name:</label>
                                    <input type="text" id="Title" required className="form-control" value={addEvent.title} onChange={(e) => setAddEvent({ ...addEvent, title: e.target.value })} />
                                </div>
                                <div className="form-group row-6">
                                    <label className="heading" for='startDate'>Start Date:</label>
                                    <DatePicker 
                                        id="startDate"
                                        popperPlacement="position-absolute" 
                                        selected={addEvent.start} 
                                        onChange={(start) => setAddEvent({ ...addEvent, start })} 
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={20}
                                        timeCaption="time"
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group row-6">
                                    <label className="heading" for="endDate">End Date:</label>
                                    <DatePicker 
                                        id="endDate"
                                        popperPlacement="position-absolute" 
                                        className="mb-3 form-control" 
                                        popperClassName="" 
                                        placeholderText={addEvent.end}
                                        selected={addEvent.end} 
                                        onChange={(end) => setAddEvent({ ...addEvent, end })} 
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={20}
                                        timeCaption="time"
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                                </div>
                            </form>
                        </Modal.Body>
                        <div className="row m-2 justify-content-end">
                            <button className="btn btn-dark col-2" onClick={closeModal}>
                                Close
                            </button>
                            <button className="btn btn-dark col-5 mx-3" onClick={handleAddEvent}>
                                Add to Calendar
                            </button>
                        </div>   
                    </Modal>
                </div>
            </div>
                {selectedEvent && <UpdateModal />}
                <Calendar 
                    localizer={localizer} 
                    events={allEvents} 
                    startAccessor="start" 
                    endAccessor="end" 
                    onSelectEvent={handleEventSelection}
                    eventPropGetter={styleEvents}
                    style={{ height: 500, margin: "50px"}} 
                    className="calendar-info"
                    />
        </div>
    );
}

export default MyCalendar;