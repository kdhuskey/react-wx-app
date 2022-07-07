import React from 'react'
import { Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import WxCard from './WxCard'
import '../App.css'

function Results(props) {
  
  const wxData = useSelector(state => state.search.weatherData)
  // const city = useSelector(state => state.search.foundCity )
  
  if(!wxData){
    return null
  }
  const weather = wxData[props.display]
  return (
    <Container>
      <Carousel className='carousel-card-up'>
      <CarouselItem  className='fullweek-day-card '>
      <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
        {weather.slice(0, 1).map((wx, i) => (
          <Col key={i} className="gap-4 ">
              <WxCard  text={wx} />
          </Col>
        ))}
      </Row>
        </CarouselItem>
        <CarouselItem>
      <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
        {weather.slice(1, 2).map((wx, i) => (
          <Col key={i} className="gap-4">
              <WxCard text={wx} />
          </Col>
        ))}
      </Row>
        </CarouselItem> <CarouselItem>
      <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
        {weather.slice(2, 3).map((wx, i) => (
          <Col key={i} className="gap-4">
              <WxCard text={wx} />
          </Col>
        ))}
      </Row>
        </CarouselItem> <CarouselItem>
      <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
        {weather.slice(3, 4).map((wx, i) => (
          <Col key={i} className="gap-4">
              <WxCard text={wx} />
          </Col>
        ))}
      </Row>
        </CarouselItem> <CarouselItem>
      <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
        {weather.slice(4, 5).map((wx, i) => (
          <Col key={i} className="gap-4">
              <WxCard text={wx} />
          </Col>
        ))}
      </Row>
        </CarouselItem> <CarouselItem>
      <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
        {weather.slice(5, 6).map((wx, i) => (
          <Col key={i} className="gap-4">
              <WxCard text={wx} />
          </Col>
        ))}
      </Row>
        </CarouselItem> <CarouselItem>
      <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
        {weather.slice(6, 7).map((wx, i) => (
          <Col key={i} className="gap-4">
              <WxCard text={wx} />
          </Col>
        ))}
      </Row>
        </CarouselItem>
        <CarouselItem>
      <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
        {weather.slice(7, 8).map((wx, i) => (
          <Col key={i} className="gap-4">
              <WxCard text={wx} />
          </Col>
        ))}
      </Row>
        </CarouselItem>
        </Carousel>
    </Container>
  )
} 

export default Results