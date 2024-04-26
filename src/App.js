import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Specials  from './components/Menu';
import BookingPage from './components/BookingPage';
import About from './components/About';
import Footer from './components/Footer';
import ConfirmedBooking from './components/ConfirmedBooking';


function App() {
  return (
    <Router>
      <>
      <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Specials />} />
          <Route path='/reservations' element={<BookingPage />} />
          <Route path='/confirmed-bookings' element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

