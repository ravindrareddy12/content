import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setProposals } from '../../redux/actions/proposalContent';

const Marketplace = ({
  selectedCategories,
  selectedLanguage,
  selectedRegion,
  selectedProductType,
  selectedBudget
}) => {
  const dispatch = useDispatch();
  const contents = useSelector(state => state.contents);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run once during component initialization

  const fetchData = async () => {
    try {
      const res = await axios.get('https://gurkul.onrender.com/pressReleases');
      setData(res.data);
      dispatch(setProposals(res.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const navigate = useNavigate();
  const filteredContents = contents && contents.data ? contents.data.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const languageMatch = !selectedLanguage || product.language === selectedLanguage;
    const regionMatch = !selectedRegion || product.region.includes(selectedRegion);
    const productTypeMatch = !selectedProductType || product.type === selectedProductType;
    const budgetMatch = !selectedBudget || product.budget === selectedBudget;
    
    return categoryMatch && languageMatch && regionMatch && productTypeMatch && budgetMatch;
  } ) : [];
  
  const proDetailPage = (id) => {
    console.log(id);
    navigate('/prosal/' + id);
  };

  return (
    <div className="flex-1 p-4">
      <div className="mb-4 flex justify-between items-center">
        <span>Showing Result: {filteredContents.length}</span>
        <div className="space-x-2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {console.log(contents.data)}
        {filteredContents.map((product) => (
          <button key={product._id} onClick={() => proDetailPage(product._id)}>
            <ProductCard product={product} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
