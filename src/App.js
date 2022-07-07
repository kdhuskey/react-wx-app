import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Fullforcast from './routes/Fullforcast';
import Threeday from './routes/Threeday';
import NotFound from './routes/NotFound';
import Oneday from './routes/Oneday';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0)
  if (count > 10 ){
    alert(`Don't do that..`)
    setCount(0)
  }
  const increase = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand onClick={increase} href="#home">Weather Wise</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} className='home-search-button' to="/">Home </Nav.Link>
        <NavDropdown title="Get Weather" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} className='forcast-selector-dropdown' to="/weekly_forcast">Weekly Forecast</NavDropdown.Item>
          <NavDropdown.Item as={Link} className='forcast-selector-dropdown'  to="/48_outlook">48 Hour Outlook</NavDropdown.Item>
          <NavDropdown.Item as={Link} className='forcast-selector-dropdown' to="/weather_for_today">Daily</NavDropdown.Item>
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weekly_forcast" element={<Fullforcast />} />
      <Route path='/48_outlook' element={<Threeday/>} />
      <Route path='/weather_for_today' element={<Oneday/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </div>
  );
}

export default App;
