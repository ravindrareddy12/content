import React, { useState } from 'react';

const Sidebar = () => {
  const [categories, setCategories] = useState([
    { name: 'Content Distribution', checked: false },
    { name: 'Ads', checked: false },
    { name: 'Twitter Influencers', checked: false },
    { name: 'Telegram Influencers', checked: false },
    { name: 'YouTube Influencers', checked: false },
    { name: 'Instagram Influencers', checked: false },
    { name: 'ICO Listing', checked: false },
    { name: 'Exchange Listing', checked: false }
  ]);

  const [languages, setLanguages] = useState(['English', 'Spanish', 'French']);
  const [regions, setRegions] = useState(['North America', 'Europe', 'Asia']);
  const [productTypes, setProductTypes] = useState(['Software', 'Hardware', 'Services']);
  const [budgets, setBudgets] = useState(['Low', 'Medium', 'High']);

  const handleCategoryChange = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].checked = !updatedCategories[index].checked;
    setCategories(updatedCategories);
  };

  return (
    <aside className="w-1/5 p-4 bg-gray-100">
      <div className="mb-4">
        <h4 className="font-bold mb-2">Categories</h4>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="py-1">
              <input
                type="checkbox"
                checked={category.checked}
                onChange={() => handleCategoryChange(index)}
              />
              <label className="ml-2">{category.name}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h4 className="font-bold mb-2">Filters</h4>
        <div className="mb-2">
          <label className="block mb-1">Language</label>
          <select className="w-full border p-2 rounded">
            {languages.map((language, index) => (
              <option key={index} value={language}>{language}</option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="block mb-1">Region</label>
          <select className="w-full border p-2 rounded">
            {regions.map((region, index) => (
              <option key={index} value={region}>{region}</option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="block mb-1">Product Type</label>
          <select className="w-full border p-2 rounded">
            {productTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">Budget</label>
          <select className="w-full border p-2 rounded">
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
