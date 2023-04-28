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
      <h1 className="text-3xl text-center mt-6 mb-6">Events</h1>
      <div className="flex flex-wrap justify-center ">
        <img src="/gamingTournament.png" className="w-1/3 aspect-auto h-1/3" />
        <p className=" w-1/3 self-center m-6">
          Discover the exciting lineup of events happening in the vibrant city
          of NYC! From music concerts and art exhibitions to sports matches and
          cultural festivals, our Events section keeps you informed about the
          latest happenings in the Big Apple. Explore the diverse and dynamic
          event scene, and make sure you don't miss out on any of the thrilling
          experiences that NYC has to offer.
        </p>
      </div>
      <h2 className="text-2xl text-center mt-6 mb-6">Upcoming Events</h2>
      <p className="text-center w-1/2 self-center">
        Stay ahead of the curve with our Upcoming Events section! We curate a
        comprehensive list of upcoming events in NYC, keeping you in the loop
        about what's coming next. Be the first to know about upcoming concerts,
        theatrical performances, film screenings, conferences, and more. With
        our constantly updated calendar, you can plan your schedule in advance
        and ensure you never miss a remarkable event in the city that never
        sleeps.
      </p>
      <div className="flex flex-wrap justify-center">{eventsElements}</div>
    </>
  )
}

export default Events
