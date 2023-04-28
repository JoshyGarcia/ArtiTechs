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
      events.map((event) => (
        <EventCard key={event.id} event={event} className="w-1/3" />
      ))
    )
  }, [events])
  return (
    <>
      <h1 className="text-3xl text-center">Events</h1>
      <div className="flex flex-wrap justify-center">
        <img src="/gamingTournament.png" className="w-1/2 aspect-auto" />
        <hr className="my-4" />
        <p className=" w-1/3 self-center">
          Discover the exciting lineup of events happening in the vibrant city
          of NYC! From music concerts and art exhibitions to sports matches and
          cultural festivals, our Events section keeps you informed about the
          latest happenings in the Big Apple. Explore the diverse and dynamic
          event scene, and make sure you don't miss out on any of the thrilling
          experiences that NYC has to offer.
        </p>
      </div>
      <hr className="my-4" />
      <h2 className="text-2xl text-center">Upcoming Events</h2>
      <hr className="my-4" />
      <p className="text-center w-1/2 self-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quae voluptates voluptatem quod dolorum
        voluptas quos quas natus. Quisquam voluptatum, quibusdam, quia, quae
        voluptates voluptatem quod dolorum voluptas quos quas natus.
      </p>
      <div className="flex flex-wrap justify-center">{eventsElements}</div>
    </>
  )
}

export default Events
