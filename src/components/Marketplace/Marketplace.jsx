import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Marketplace = ({
  selectedCategories,
  selectedLanguage,
  selectedRegion,
  selectedProductType,
  selectedBudget
}) => {
  const contents = useSelector(state => state.contents);
  const navigate = useNavigate();
  const filteredContents = contents.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const languageMatch = !selectedLanguage || product.language === selectedLanguage;
    const regionMatch = !selectedRegion || product.region.includes(selectedRegion);
    const productTypeMatch = !selectedProductType || product.type === selectedProductType;
    const budgetMatch = !selectedBudget || product.budget === selectedBudget;
    
    return categoryMatch && languageMatch && regionMatch && productTypeMatch && budgetMatch;
  });

  function proDetailPage(id){
    console.log(id)
    navigate('/prosal/' + id);
  }
  return (
    <div className="flex-1 p-4">
      <div className="mb-4 flex justify-between items-center">
        <span>Showing Result: {filteredContents.length}</span>
        <div className="space-x-2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredContents.map(product => (
          // <button onClick={() => proDetailPage(product.id)}>
            <ProductCard  key={product.id} product={product} />
          // </button>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
