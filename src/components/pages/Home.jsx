import React, { useState } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import Marketplace from '../Marketplace/Marketplace';

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedProductType, setSelectedProductType] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
          selectedProductType={selectedProductType}
          onProductTypeChange={setSelectedProductType}
          selectedBudget={selectedBudget}
          onBudgetChange={setSelectedBudget}
        />
        <Marketplace
          selectedCategories={selectedCategories}
          selectedLanguage={selectedLanguage}
          selectedRegion={selectedRegion}
          selectedProductType={selectedProductType}
          selectedBudget={selectedBudget}
        />
      </div>
    </div>
  );
};

export default Home;
