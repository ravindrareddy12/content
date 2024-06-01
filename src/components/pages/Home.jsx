import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import Marketplace from '../Marketplace/Marketplace';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Marketplace />
      </div>
    </div>
  );
};

export default Home;
