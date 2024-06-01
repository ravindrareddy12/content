// contentReducer.js
import { ADD_PROPOSALS } from '../actions/proposalContent';

const initialState = [
{ id: 1, name: 'Today News', price: 5000, region: 'USA, India, Dubai',category: 'Content Distribution' },
{ id: 2, name: 'Today News', price: 5000, region: 'USA, India, Dubai' ,category: 'Twitter Influencers'},
{ id: 3, name: 'Today News', price: 5000, region: 'USA, India, Dubai' ,category: 'Ads'},
{ id: 4, name: 'Today News', price: 5000, region: 'USA, India, Dubai' ,category: 'Content Distribution'},
{ id: 5, name: 'Today News', price: 5000, region: 'USA, India, Dubai' ,category: 'Content Distribution'},
{ id: 6, name: 'Today News', price: 5000, region: 'USA, India, Dubai' ,category: 'Content Distribution'},
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
