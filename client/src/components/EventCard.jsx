const EventCard = (props) => {
  const { name, location, event_time, age_requirement, prize, game_style } =
    props.event

  const eventDate = new Date(event_time).toLocaleDateString()
  const eventTime = new Date(event_time).toLocaleTimeString()

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-md">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Location:</span> {location}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Date:</span> {eventDate}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Time:</span> {eventTime}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Age requirement:</span>{" "}
        {age_requirement}+
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Prize:</span> {prize}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Game style:</span> {game_style}
      </p>
    </div>
  )
}

export default EventCard
