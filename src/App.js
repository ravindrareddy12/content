import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Cart from '../src/components/cart/CartList'
import ProposalDetails from '../src/components/proposal/ProposalShow'
import BookmarkedItems from './components/bookmark/BookMark';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/prosal/:id' element={<ProposalDetails />} /> */}
        <Route path='/prosal/:id?' element={<ProposalDetails />} />
        <Route path='/bookMark' element={<BookmarkedItems />} />
      </Routes>
    </Router>
  );
}

export default App;
