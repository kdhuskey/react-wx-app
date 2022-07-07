import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { search, setResults, startSearch } from '../redux/actions'
import Home from '../routes/Home'
import '../App.css'

function SearchBar(props) {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState([])

  
  const city = useSelector(state => state.search.foundCity)
  const loading = useSelector(state => state.search.loading)
  const cityReturned = city.name
  const selectedCity = cityReturned ? props.prefix + ' ' + cityReturned : 'Enter zipcode 👇 to get weather'
  
  const handlesubmit = function (e) {
    e.preventDefault()
    dispatch(startSearch(searchText))
    setSearchText('')
  }
  

  return (
    <Container className="mb-5 ">
      <Row className="justify-content-center">
        <Col className='aligned-search-bar' sm={12} md={10} lg={8} xl={7} xxl={6}>
            <h2>{selectedCity}</h2>
            <br />
          <Form className='search-bar search-button' onSubmit={handlesubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter zipcode"
                aria-label="Search"
                aria-describedby="search"
                className='search-bar-input'
                required
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
              />
              <Button className='search-bar-button' variant="primary" id="search" type='submit'>
                {loading ? 'loading...' : 'Search'}
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar