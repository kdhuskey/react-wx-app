import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import WeekendCard from './WeekendCard'

function WeekendResults(props) {
  
  const wxData = useSelector(state => state.search.weatherData)
  const city = useSelector(state => state.search.foundCity )
  
  if(!wxData){
    return null
  }
  const weather = wxData[props.display]
  return (
    <Container>

      <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
        {weather.map((wx, i) => (
          <Col key={i} className="gap-4">
              <WeekendCard text={wx} />
          </Col>
        ))}
      </Row>
    </Container>
  )
} 

export default WeekendResults