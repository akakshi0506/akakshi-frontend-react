import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import ContactUspage from './components/ContactUspage';
import Header from './global-components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
        <Header />
        <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />  {/* Home Page */}
              <Route path="/productpage" element={<Productpage />} />  {/* Shop Page */}
              <Route path="/contactus" element={<ContactUspage />} />  {/* Contact Us Page */}
            </Routes>
        </Router>
      </div>
  );
};

export default App;