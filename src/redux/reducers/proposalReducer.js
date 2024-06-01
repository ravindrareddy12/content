// contentReducer.js
import { ADD_PROPOSALS } from '../actions/proposalContent';

const initialState = [
  { 
    id: 1, 
    name: 'Today News', 
    price: 5000, 
    region: 'USA, India, Dubai', 
    category: 'Content Distribution',
    budget: '5000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eget felis sed libero pretium luctus.',
    additionalInfo: 'This package includes distribution across major news platforms and social media channels.'
  },
  { 
    id: 2, 
    name: 'Today News', 
    price: 5000, 
    region: 'USA, India, Dubai', 
    category: 'Twitter Influencers',
    description: 'Vestibulum at libero justo. Integer mattis pretium nunc, nec consectetur ipsum placerat vel.',
    additionalInfo: 'Reach millions of followers through partnerships with influential Twitter users.'
  },
  { 
    id: 3, 
    name: 'Today News', 
    price: 5000, 
    region: 'USA, India, Dubai', 
    category: 'Ads',
    description: 'Fusce a arcu elit. Phasellus et felis nec magna tincidunt malesuada. Proin eget tortor urna.',
    additionalInfo: 'Boost your visibility with targeted advertising campaigns across various platforms.'
  },
  { 
    id: 4, 
    name: 'Today News', 
    price: 5000, 
    region: 'USA, India, Dubai', 
    category: 'Content Distribution',
    description: 'Praesent sed velit a purus rhoncus scelerisque. Nulla facilisi. Ut malesuada dui et finibus cursus.',
    additionalInfo: 'Expand your reach with strategic content distribution tailored to your target audience.'
  },
  { 
    id: 5, 
    name: 'Today News', 
    price: 5000, 
    region: 'USA, India, Dubai', 
    category: 'Content Distribution',
    description: 'Suspendisse potenti. Nullam tincidunt efficitur justo nec congue. Quisque gravida ligula nec orci suscipit.',
    additionalInfo: 'Drive engagement and traffic with customized content distribution solutions.'
  },
  { 
    id: 6, 
    name: 'Today News', 
    price: 5000, 
    region: 'USA, India, Dubai', 
    category: 'Content Distribution',
    description: 'Donec in commodo elit, eu accumsan sapien. Cras quis erat sed justo fringilla finibus non sit amet felis.',
    additionalInfo: 'Maximize your online presence with effective content distribution strategies.'
  }
];

const proposalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROPOSALS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default proposalReducer;
