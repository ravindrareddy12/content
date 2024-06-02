import React, { useState } from 'react';
import Header from '../common/Header';
import ProposalReview from './ProposalReview'
const App = () => {
  const [selectedProgress, setSelectedProgress] = useState('add-offering');
  const [offering, setOffering] = useState({
    offcategory: '',
    name: '',
    websiteLink: '',
    description: '',
    websiteLogo: '',
    offEmail: '',
    telId: '',
    contentLang: 'english',
    region: 'usa',
    gamblingYes: false,
    adultYes: false,
    cryptoYes: false,
    gamblingNo: false,
    adultNo: false,
    cryptoNo: false,
    uploadpdf: '',
    
  });

  const [contentOfferings, setContentOfferings] = useState({
    category: 'PressRelease',
    googleind: false,
    socialshare: false,
    homepage: false,
    gambling: false,
    price:0,
    discountedPri:0
  });

  const [contentOfferingsData, setContentOfferingsData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedProgress === 'add-offering') {
      setSelectedProgress('add-content-offerings');
    } else if (selectedProgress === 'add-content-offerings') {
      setSelectedProgress('review');
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setContentOfferings((prev) => ({ ...prev, [name]: checked }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setOffering((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setOffering((prev) => ({ ...prev, websiteLogo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const saveContentOfferings = () => {
    console.log(offering);
    console.log(contentOfferings);
  let payload = []
  payload.push(contentOfferings)
  payload.push(offering)

    // Update the state
    setContentOfferingsData(payload);
    console.log(contentOfferingsData)

    console.log(payload)
    // Optionally, store the updated data in localStorage
    localStorage.setItem('contentOfferingsData', JSON.stringify(payload));

  };

  const selectedProgre =(selectedProgress)=>{
    setSelectedProgress(selectedProgress)
  }

  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 flex">
        {/* Progress Sidebar */}
        <div className="w-1/4 p-4 border-r border-gray-200">
          <div className="mb-4">
            <h2 className="font-semibold">Progress</h2>
            <ul className="mt-2">
              <li className="flex items-center mb-2">
                <input
                  type="radio"
                  name="progress"
                  value="add-offering"
                  className="mr-2"
                  checked={selectedProgress === 'add-offering'}
                  onChange={() => setSelectedProgress('add-offering')}
                />
                Add Offering
              </li>
              <li className="flex items-center mb-2">
                <input
                  type="radio"
                  name="progress"
                  value="add-content-offerings"
                  className="mr-2"
                  checked={selectedProgress === 'add-content-offerings'}
                  onChange={() => setSelectedProgress('add-content-offerings')}
                />
                Add Content Offerings
              </li>
              <li className="flex items-center mb-2">
                <input
                  type="radio"
                  name="progress"
                  value="review"
                  className="mr-2"
                  checked={selectedProgress === 'review'}
                  onChange={() => setSelectedProgress('review')}
                />
                Review
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-2/4 p-4">
          {selectedProgress === 'add-offering' && (
            <form onSubmit={handleSubmit}>
              <h2 className="font-semibold mb-4">Add Offering</h2>
              <div className="mb-4">
                <label className="block mb-2">Select Category</label>
                <select
                  id="offcategory"
                  value={offering.offcategory}
                  onChange={(e) => setOffering((prev) => ({ ...prev, offcategory: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                   <option value="contentdistribution">Content Distribution</option>
                    <option value="ads">Ads</option>
                    <option value="twitterinfluencers">Twitter Influencers</option>
                    <option value="telegraminfluencers">Telegram Influencers</option>
                    <option value="youtubeinfluencers">YouTube Influencers</option>
                    <option value="instagaminfluencers">Instagram Influencers</option>
                    <option value="icolisting">ICO Listing</option>
                    <option value="exchangelisting">Exchange Listing</option>
                  {/* Add more categories here as needed */}
                </select>
              </div>
              <div className="mb-4">
                <div className="flex mb-4">
                  <div className="w-1/2 pr-2">
                    <label  className="block mb-2">Website Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={offering.name}
                      onChange={(e) => setOffering((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <label  className="block mb-2">Website Link</label>
                    <input
                      type="text"
                      id="websiteLink"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={offering.websiteLink}
                      onChange={(e) => setOffering((prev) => ({ ...prev, websiteLink: e.target.value }))}
                    />
                  </div>
                </div>
                {/* Add more form fields as needed */}
                <div className="mb-4">
                  <label  className="block mb-2">Website Description</label>
                  <input
                    type="text"
                    id="description"
                    placeholder='Type Description Here...'
                    className="w-full p-2 border border-gray-300 rounded"
                    value={offering.description}
                    onChange={(e) => setOffering((prev) => ({ ...prev, description: e.target.value }))}
                  />
                </div>
                {/* Image upload input */}
                <div className="mb-4">
                  <label  className="block mb-2">Website Logo</label>
                  <input
                    type="file"
                    id="websiteLogo"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mb-2"
                  />
                  {/* Display uploaded image */}
                  {offering.websiteLogo && (
                    <div>
                      <img src={offering.websiteLogo} alt="Uploaded" className="w-20 h-20 mb-2 rounded" />
                      <button
                        type="button"
                        onClick={() => setOffering((prev) => ({ ...prev, websiteLogo: '' }))}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                      >
                        Remove
                      </button>
                      {/* Add edit button functionality if needed */}
                    </div>
                  )}
                </div>
                <div className="flex mb-4">
                  <div className="w-1/2 pr-2">
                    <label  className="block mb-2">Official Email</label>
                    <input
                      type="text"
                      id="offEmail"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={offering.offEmail}
                      onChange={(e) => setOffering((prev) => ({ ...prev, offEmail: e.target.value }))}
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <label  className="block mb-2">Telegram ID</label>
                    <input
                      type="text"
                      id="telId"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={offering.telId}
                      onChange={(e) => setOffering((prev) => ({ ...prev, telId: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/2 pr-2">
                    <label  className="block mb-2">Select Content Language</label>
                    <select
                      id="contentLang"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={offering.contentLang}
                      onChange={(e) => setOffering((prev) => ({ ...prev, contentLang: e.target.value }))}
                    >
                      <option value="english">English</option>
                    </select>
                  </div>
                  <div className="w-1/2 pl-2">
                    <label  className="block mb-2">Select Geographic Location</label>
                    <select
                      id="region"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={offering.region}
                      onChange={(e) => setOffering((prev) => ({ ...prev, region: e.target.value }))}
                    >
                      <option value="usa">USA</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="mb-2">Do you have gambling content?</p>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="gamblingYes"
                      value="gamblingYes"
                      checked={offering.gamblingYes}
                      onChange={handleRadioChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gamblingNo"
                      value="gamblingNo"
                      checked={offering.gamblingNo}
                      onChange={handleRadioChange}
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                <div className="mb-4">
                  <p className="mb-2">Do you have adult content?</p>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="adultYes"
                      value="adultYes"
                      checked={offering.adultYes}
                      onChange={handleRadioChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="adultNo"
                      value="adultNo"
                      checked={offering.adultNo}
                      onChange={handleRadioChange}
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                <div className="mb-4">
                  <p className="mb-2">Do you have crypto content?</p>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="cryptoYes"
                      value="cryptoYes"
                      checked={offering.cryptoYes}
                      onChange={handleRadioChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="cryptoNo"
                      value="cryptoNo"
                      checked={offering.cryptoNo}
                      onChange={handleRadioChange}
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                <div className="mb-4">
                  <label htmlFor="uploadpdf" className="block mb-2">Upload PDF</label>
                  <input
                    type="file"
                    id="uploadpdf"
                    accept="application/pdf"
                    onChange={(e) => setOffering((prev) => ({ ...prev, uploadpdf: e.target.files[0] || '' }))}
                    className="mb-2"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </form>
          )}
          {selectedProgress === 'add-content-offerings' && (
            <form onSubmit={handleSubmit}>
              <h2 className="font-semibold mb-4">Add Content Offerings</h2>
              <div className="mb-4">
                <label htmlFor="category" className="block mb-2">Content Offering Category</label>
                <select
                  id="category"
                  value={contentOfferings.category}
                  onChange={(e) => setContentOfferings((prev) => ({ ...prev, category: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="PressRelease">Press Release</option>
                  <option value="Sponsored">Sponsored</option>
                  <option value="GuestPost">Guest Post</option>
                </select>
              </div>
              <div className="flex mb-4">
                  <div className="w-1/2 pr-2">
                    <label  className="block mb-2">Media Kit Price</label>
                    <input
                      type="number"
                      id="mediaKitPri"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={contentOfferings.price}
                      onChange={(e) => setContentOfferings({ ...contentOfferings, price: e.target.value })}
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <label htmlFor="discountedPri" className="block mb-2">Discounted Price</label>
                    <input
                      type="number"
                      id="discountedPri"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={contentOfferings.discountedPri}
                      onChange={(e) => setContentOfferings({ ...contentOfferings, discountedPri: e.target.value })}
                    />
                  </div>
                </div>
                <h2 className="font-semibold mb-4">Features</h2>
              <div className="mb-4">
                <label className="inline-flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="googleind"
                    checked={contentOfferings.googleind}
                    onChange={handleCheckboxChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Google Indexed</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="socialshare"
                    checked={contentOfferings.socialshare}
                    onChange={handleCheckboxChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Social Share</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="homepage"
                    checked={contentOfferings.homepage}
                    onChange={handleCheckboxChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Home Page</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="gambling"
                    checked={contentOfferings.gambling}
                    onChange={handleCheckboxChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Gambling</span>
                </label>
              </div>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">+ Add Example</button>
              <div className="flex justify-between">
                     <button onClick={saveContentOfferings} className="bg-blue-500 hover:bg-blue-700 mt-10 text-white font-bold py-2 px-4 rounded">
                        Done
                    </button>
                    <button  className="bg-green-500 hover:bg-green-700 mt-10 text-white font-bold py-2 px-4 rounded">
                         + Add New Offerings
                    </button>
              </div>
            </form>
          )}
          {selectedProgress === 'review' && (
            <div>
              <h2 className="font-semibold mb-4">Review</h2>
              <ProposalReview updateselectedProgre= {selectedProgre} />
              
            </div>
          )}
        </div>
        <div className="w-1/4 p-4 border-l border-gray-200">
          <h2 className="font-semibold">Your offering drafts</h2>
         
        </div>
    </div>
    </>
  );
};

export default App;