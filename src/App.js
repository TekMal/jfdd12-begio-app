import React, { useState } from "react"
import "./App.css"
import { EventList } from "./components/EventList"
import events from "./events.json"
import users from "./users.json"
import { MapView } from "./components/MapView"

function App() {
    const [currentUser, setCurrentUser] = useState(users[0])
    const [myEvents, setMyEvents] = useState([])

    function toogleMyEvent() {
        setCurrentUser(currentUser.events.push())
    }
    return (
        <div className="App">
            <MapView />
            <EventList
                myEvents={myEvents}
                setFavourite={setMyEvents}
                events={events}
                toogleMyEvent={this.toogleMyEvent}
            />
            {currentUser.name}
        </div>
    )
}

export default App
