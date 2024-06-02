// reducers/contentReducer.js
import { ADD_PROPOSALS, SET_PROPOSALS } from '../actions/proposalContent';

const initialState = [];

const proposalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROPOSALS:
      return [...state, action.payload];
    case SET_PROPOSALS:
      return action.payload;
    default:
      return state;
  }
};

export default proposalReducer;
