import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Sign from './pages/authentication/Sign';
import Login from './pages/authentication/Login';
import Blog from './pages/user/Blog';
import Event from './pages/user/Event'
import About from './pages/user/About'
import Contact from './pages/user/Contact'
import Partyevents from './pages/user/Partyevents'
import Weddingevents from './pages/user/Weddingevents'
import Corpevents from './pages/user/Corpevents'
import Payments from './pages/user/Payments'
import Dashboard from './pages/admin/Dashboard';
import Manage from './pages/admin/Manage';
import PaymentAdmin from './pages/admin/PaymentAdmin';
import Team from './pages/user/Team';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Blog/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign" element={<Sign/>}/>
      <Route path="/event" element={<Event/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/partyevents" element={<Partyevents/>}/>
      <Route path="/weddinevents" element={<Weddingevents/>}/>
      <Route path="/corpevents" element={<Corpevents/>}/>
      <Route path="/payments" element={<Payments/>}/>
      <Route path="/admin" element={<Dashboard/>}/>
      <Route path="/paymentadmin" element={<PaymentAdmin/>}/>
      <Route path='/manage' element={<Manage/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
