import { useState, useEffect } from "react"

import EventCard from "./EventCard"
import fetchEventsData from "../utils/fetchEventsData"

const Events = () => {
  const [events, setEvents] = useState([])
  const [eventsElements, setEventsElements] = useState([])

  useEffect(() => {
    fetchEventsData().then((data) => setEvents(data))
  }, [])

  useEffect(() => {
    setEventsElements(
      events.map((event) => <EventCard key={event.id} event={event} />)
    )
  }, [events])
  return <div>{eventsElements}</div>
}

export default Events
