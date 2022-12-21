import React, { useEffect, useContext, useState } from "react";
import { AppContext} from "../context/context";
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";

const Activities = () => {

const {selectedPark, setAllEvents, allEvents, username} = useContext(AppContext)

const [addEvent, setAddEvent] = useState({ title: "", start: "", end: "" })
const [showModal, setShowModal ] = useState(false)
const [modalData, setModalData] = useState('')
const [activityList, setActivityList] = useState([])
let parkCode = selectedPark.parkCode
console.log("Park Code:", parkCode)
//Need to make api call to thingstodo endpoint

useEffect(() => {
        fetch(`https://developer.nps.gov/api/v1/thingstodo?parkcode=${parkCode}&limit=87&api_key=cHVc4fkkvOJ7JGO1h6SPHajDtt9NSmef3cH9oBwH`)
    .then((results) => results.json())
    .then((data) => {
        let activitiesList = data.data
        console.log("Activities:",data);
        setActivityList(activitiesList);
        console.log("Activity List: ", activityList)
    });
}, []);

function openModal(e){
    if (username !== undefined){
        setModalData(e)
        setAddEvent({title:selectedPark.fullName+': '+ e, start:"", end:""})
        setShowModal(true)
    } else {
        alert('Please Log In!')
    }
}

function closeModal(){
    setAddEvent({ title: "", start: "", end: "" })
    setModalData()
    setShowModal(false)
    console.log('closed')
}

function handleAddEvent() {
    console.log(addEvent)
    if (addEvent.start !== "" && addEvent.end !== ""){
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
    closeModal()
    addToDB()
} else {
        alert('Complete all fields')
        console.log(addEvent)
    }
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

        return(
            <div className="info-section">
                <h3 className="info-title bg-dark">Activities</h3>
                <Accordion className="accordion-section">
                    {activityList.map((activity, index) => {
                        return(

                    <Accordion.Item eventKey={index} className="col-12">
                        <Accordion.Header>{activity.title}</Accordion.Header>
                        <Accordion.Body className="accordion-body">
                            <img className="row activity-image" src={activity.images[0]?.url} ></img>
                            <div className="row">{activity.shortDescription}</div>
                            <br/>
                            <div className="row"><a className="accordion-link"  target="_blank" href={activity.url}>More Info</a></div>
                            <div className="row"><button type="button" id="accordion-button" onClick={() => openModal(activity.title)} className="btn btn-dark">Add to Calendar</button></div>
                        </Accordion.Body>
                    </Accordion.Item>
                        )
                    
                    })}
                    </Accordion>
                    <Modal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {selectedPark?.fullName}: {modalData}
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form className="d-flex">
                                <div className="form-group">
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

        )
    }

export default Activities;