import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Cart from '../src/components/cart/CartList';
import ProposalDetails from '../src/components/proposal/ProposalShow';
import BookmarkedItems from './components/bookmark/BookMark';
import NewProposal from '../src/components/proposal/NewProposal';
import Login from './components/user/Signin';
import Register from './components/user/Register';
import PrivateRoute from './PrivateRoute'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={
          
            <Home />
         
        } />
        <Route path='/cart' element={
          
            <Cart />
         
        } />
        <Route path='/prosal/:id?' element={
          
            <ProposalDetails />
         
        } />
        <Route path='/bookMark' element={
          
            <BookmarkedItems />
         
        } />
        <Route path='/newproposal' element={
          
            <NewProposal />
         
        } />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
