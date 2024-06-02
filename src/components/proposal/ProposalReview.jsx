import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ContentOfferingsPreview = ({updateselectedProgre}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('contentOfferingsData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleSave = async () => {
    // Merge all objects in the array into a single object
    const mergedData = data.reduce((acc, obj) => ({ ...acc, ...obj }), {});
    mergedData.websiteLogo = ''
    console.log(mergedData)
    try {
      const response = await axios.post('https://gurkul.onrender.com/pressReleases', mergedData);
      
      console.log(response)
      if (response.data.success) {
        alert('Data saved successfully!');
        localStorage.removeItem('contentOfferingsData');
        setData([])
      } else {
        alert('Failed to save data!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save data!');
    }
  };
  const handleEdit = (index) => {
    updateselectedProgre('add-content-offerings')
  };

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  const renderChips = (label, value) => (
    <div className="flex items-center mb-2">
      <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm font-semibold mr-2">{label}:</span>
      <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">{value}</span>
    </div>
  );

  return (
    <div className="p-4">
      {data.map((item, index) => (
        <div key={index} className="mb-4 border p-4 rounded shadow-sm relative">
          <button
            onClick={() => handleEdit(index)}
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full shadow hover:bg-blue-700 transition duration-300"
          >
            Edit
          </button>
          {item.category && (
            <div>
              <h2 className="text-xl font-bold mb-4">{item.category}</h2>
              {renderChips('Discounted Price', item.discountedPri)}
              {renderChips('Gambling', item.gambling ? 'Yes' : 'No')}
              {renderChips('Google Index', item.googleind ? 'Yes' : 'No')}
              {renderChips('Homepage', item.homepage ? 'Yes' : 'No')}
              {renderChips('Media Kit Price', item.price)}
              {renderChips('Social Share', item.socialshare ? 'Yes' : 'No')}
            </div>
          )}
          {item.name && (
            <div>
                <button
                onClick={() => updateselectedProgre('add-offering')}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full shadow hover:bg-green-700 transition duration-300"
              >
                Edit
              </button>
              <h2 className="text-xl font-bold mb-4">{item.name}</h2>
              {renderChips('Website Link', item.websiteLink)}
              {renderChips('Description', item.description)}
              {renderChips('Email', item.offEmail)}
              {renderChips('Category', item.offcategory)}
              {renderChips('Telephone ID', item.telId)}
              {item.websiteLogo && (
                <img src={item.websiteLogo} alt="Website Logo" className="mt-2 w-32 h-32 " />
              )}
              <br/>
              {renderChips('Content Language', item.contentLang)}
              {renderChips('Crypto', item.cryptoYes ? 'Yes' : 'No')}
              {renderChips('Adult', item.adultYes ? 'Yes' : 'No')}
              {renderChips('Gambling', item.gamblingYes ? 'Yes' : 'No')}
              {renderChips('Geolocation', item.region)}
              {item.uploadpdf && (
                <div>
                  {renderChips('PDF Upload', Object.keys(item.uploadpdf).length > 0 ? 'Yes' : 'No')}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition duration-300"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ContentOfferingsPreview;
