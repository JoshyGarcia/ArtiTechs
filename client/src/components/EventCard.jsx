import { Card, Badge, Text, Title, Grid, Col } from "@tremor/react"

const EventCard = (props) => {
  const { name, location, event_time, age_requirement, prize, platform } =
    props.event

  const eventDate = new Date(event_time).toLocaleDateString()
  const eventTime = new Date(event_time).toLocaleTimeString()

  return (
    <Card className="w-1/3 m-4">
      <Title size="2xl" weight="bold">
        {name}
      </Title>
      <Grid cols="2" gap="2">
        <Col>
          <Badge className="mr-2 mt-2" color="yellow">
            {location}
          </Badge>
          <Badge className="mr-2 mt-2">{eventDate}</Badge>
          <Badge className="mr-2 mt-2">{eventTime}</Badge>
          <Badge className="mr-2 mt-2" color="red">
            {age_requirement}
          </Badge>
        </Col>
        <Col>
          <Badge className="mr-2 mt-2" color="green">
            {prize}
          </Badge>
          <Badge className="mr-2 mt-2" color="gray">
            {platform}
          </Badge>
        </Col>
      </Grid>
    </Card>
  )
}

export default EventCard
