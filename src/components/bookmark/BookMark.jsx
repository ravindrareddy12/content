// src/BookmarkedItems.js
import React, { useEffect, useState } from 'react';
import pro from '../../assets/images/pro.png';
import Header from '../common/Header';
const BookmarkedItems = () => {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  useEffect(() => {
    // Fetching data from local storage
    const items = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
    setBookmarkedItems(items);
  }, []);

  return (
    <>
    <Header />
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bookmarked Proposals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookmarkedItems.length>0 ? bookmarkedItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img src={pro} alt={item.name} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">Price: ${item.price}</p>
            <p className="text-gray-600">Region: {item.region}</p>
            <p className="text-gray-600">Category: {item.category}</p>
          </div>
        )) : <h1 class="text-3xl top-[250px] fixed left-[400px] font-bold text-red-600 bg-yellow-200 p-5 rounded-lg shadow-lg">
      Book Marked Empty
    </h1>}
      </div>
    </div>
    </>
  );
};

export default BookmarkedItems;
