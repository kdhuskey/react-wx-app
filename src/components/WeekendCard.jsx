import React from 'react'
import { Card, Container } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
import '../App.css'
// import { startSearch } from '../redux/actions'

function WeekendCard({ text }) {
  const cloudIcon = text.weather[0].icon
  // const dispatch = useDispatch()
  // const handleAdd = (text) => {
  //   dispatch(startSearch(text))
  // }
  const isHourly = typeof text.temp === 'number' ? true : false
  const currentDate = new Date(text.dt * 1000)
  const currentDay = currentDate.toLocaleString(`en-us`, { weekday: `long` })
  const currentTime = currentDate.toLocaleString(`en-us`, { timeStyle: `short` })
  const windSpeed = Math.round(text.wind_speed)
  const lowTemp = Math.round(text.temp.min)
  const highTemp = Math.round(text.temp.max)
  const inHg = text.pressure * .029530
  let precip = Math.round(text.pop * 100)
  let windDeg = text.wind_deg
  

  if (windDeg >= 0 && windDeg <= 45) {
    windDeg = 'NE'
  } else if (windDeg >= 46 && windDeg <= 90) {
    windDeg = 'E'
  } else if (windDeg >= 91 && windDeg <= 145) {
    windDeg = 'SE'
  } else if (windDeg >= 146 && windDeg <= 180) {
    windDeg = 'S'
  } else if (windDeg >= 181 && windDeg <= 225) {
    windDeg = 'SW'
  } else if (windDeg >= 226 && windDeg <= 270) {
    windDeg = 'W'
  } else if (windDeg >= 271 && windDeg <= 315) {
    windDeg = 'NW'
  } else if (windDeg >= 316 && windDeg <= 360) {
    windDeg = 'N'
  }
  // console.log(text.name)
  const onlyTemp = Math.round(text.temp)
  return (
    <Container>

      <Card className="h-100 wx-card twoday-wx-card">
        <Container className='twoday-wx-card test'>
          <Card.Title>{currentDay} {isHourly ? currentTime : ''}</Card.Title>
          <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${cloudIcon}@2x.png`} />
          <Card.Body className="d-flex flex-column">
            {isHourly ? (
              <>
                <Card.Text className="flex-grow-1"> Temp: {onlyTemp}°F</Card.Text>
              </>
            ) : (
              <>
                <Card.Text className="flex-grow-1"> Low: {lowTemp}°F</Card.Text>
                <Card.Text className="flex-grow-1"> High: {highTemp}°F</Card.Text>
              </>
            )}
            <Card.Text className="flex-grow-1"> Wind: {windDeg} @ {windSpeed} MPH</Card.Text>
            <Card.Text className="flex-grow-1"> Chance of Precip: {precip}%</Card.Text>
            <Card.Text className="flex-grow-1"> Pressure: {inHg.toFixed(2)}</Card.Text>
          </Card.Body>
        </Container>
      </Card>
    </Container>
  )
}

export default WeekendCard