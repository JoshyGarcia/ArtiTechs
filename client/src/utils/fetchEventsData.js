export default function fetchEventsData() {
  return fetch(
    "https://7e33868a-2e9d-4fb6-8587-82f97accdac8.mock.pstmn.io/events"
  )
    .then((response) => response.json())
    .then((data) => data.events)
}
