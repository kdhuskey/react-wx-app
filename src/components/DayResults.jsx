import React from 'react'
import { Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import DayWxCard from './DayWxCard'
import '../App.css'
function DayResults(props) {

  const wxData = useSelector(state => state.search.weatherData)
 
  if (!wxData) {
    return null
  }
  const weather = wxData[props.display]
  return (
    <Container>
      {/* xl */}
      <Carousel fade className='d-none d-xl-block '>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(0, 4).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(4, 8).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(8, 12).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
      </Carousel>
      {/* large */}
      <Carousel fade className='d-none d-lg-block d-xl-none'>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(0, 3).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(3, 6).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(6, 9).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(9, 12).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
      </Carousel>
      {/* medium */}
      <Carousel fade className='d-none d-md-block d-lg-none'>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(0, 2).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(2, 4).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(4, 6).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(6, 8).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(8, 10).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(10, 12).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
      </Carousel>
      {/* small */}
      <Carousel   className='d-sm-block d-md-none'>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(0, 1).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(1, 2).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(2, 3).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(3, 4).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(4, 5).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(5, 6).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(6, 7).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(7, 8).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(8, 9).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(9, 10).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(10, 11).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4 card-layout">
            {weather.slice(11, 12).map((wx, i) => (
              <Col key={i} className="gap-4">
                <DayWxCard text={wx} />
              </Col>
            ))}
          </Row>
        </CarouselItem>
      </Carousel>
    </Container>
  )
}

export default DayResults