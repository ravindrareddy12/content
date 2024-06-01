import React from 'react';

const Sidebar = ({
  selectedCategories,
  onCategoryChange,
  selectedLanguage,
  onLanguageChange,
  selectedRegion,
  onRegionChange,
  selectedProductType,
  onProductTypeChange,
  selectedBudget,
  onBudgetChange
}) => {
  const categories = [
    'Content Distribution',
    'Ads',
    'Twitter Influencers',
    'Telegram Influencers',
    'YouTube Influencers',
    'Instagram Influencers',
    'ICO Listing',
    'Exchange Listing'
  ];

  const languages = ['English', 'Spanish', 'French'];
  const regions = ['North America', 'Europe', 'Asia'];
  const productTypes = ['Software', 'Hardware', 'Services'];
  const budgets = [5000, 6000, 7000];

  return (
    <aside className="w-1/5 p-4 bg-gray-100">
      <div className="mb-4">
        <h4 className="font-bold mb-2">Categories</h4>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="py-1">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
              />
              <label className="ml-2">{category}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h4 className="font-bold mb-2">Filters</h4>
        <div className="mb-2">
          <label className="block mb-1">Language</label>
          <select
            className="w-full border p-2 rounded"
            value={selectedLanguage}
            onChange={e => onLanguageChange(e.target.value)}
          >
            <option value="">Select Language</option>
            {languages.map((language, index) => (
              <option key={index} value={language}>{language}</option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="block mb-1">Region</label>
          <select
            className="w-full border p-2 rounded"
            value={selectedRegion}
            onChange={e => onRegionChange(e.target.value)}
          >
            <option value="">Select Region</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>{region}</option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="block mb-1">Product Type</label>
          <select
            className="w-full border p-2 rounded"
            value={selectedProductType}
            onChange={e => onProductTypeChange(e.target.value)}
          >
            <option value="">Select Product Type</option>
            {productTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">Budget</label>
          <select
            className="w-full border p-2 rounded"
            value={selectedBudget}
            onChange={e => onBudgetChange(e.target.value)}
          >
            <option value="">Select Budget</option>
            {budgets.map((budget, index) => (
              <option key={index} value={budget}>{budget}</option>
            ))}
          </select>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
