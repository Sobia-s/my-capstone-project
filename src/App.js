import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav/Nav';
import Specials  from './components/Menu/Menu';
import BookingPage from './components/Form/BookingPage';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ConfirmedBooking from './components/Form/ConfirmedBooking';


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
          <Route path="/confirmed-bookings" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

