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
          Stay updated on the latest gaming events happening in New York City
          (NYC) and dive into the vibrant gaming community. From thrilling
          eSports tournaments to captivating game launches, this is where you'll
          find all the exciting happenings in the gaming world. Explore a wide
          range of events, including conventions, meetups, workshops, and much
          more. Whether you're a casual gamer or a dedicated enthusiast, get
          ready to immerse yourself in the thrilling world of gaming events in
          NYC!
        </p>
      </div>
      <h2 className="text-2xl text-center mt-6 mb-6">Upcoming Events</h2>
      <p className="text-center w-1/2 self-center">
        Get ready for an adrenaline-packed lineup of gaming events coming soon
        to NYC!. Discover the hottest gaming conventions, thrilling game
        showcases, exclusive previews, and exciting releases that are just
        around the corner. Whether you're a fan of console gaming, PC gaming,
        mobile gaming, or all of the above, this is the place to stay ahead of
        the curve and make sure you don't miss out on any of the upcoming gaming
        experiences in the Big Apple. Mark your calendars and get ready for
        unforgettable gaming adventures!
      </p>
      <div className="flex flex-wrap justify-center">{eventsElements}</div>
    </>
  )
}

export default Events
