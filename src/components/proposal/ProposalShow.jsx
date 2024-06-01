import React from 'react';
import ProposalDetails from './ProposalDetails';
import Header from '../common/Header';
const App = () => {
  return (
    <>
    <Header/>
    <div className="container mx-auto mt-8">
      <ProposalDetails
      />
    </div>
    </>
  );
};

export default App;
