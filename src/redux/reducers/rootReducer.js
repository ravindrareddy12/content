// rootReducer.js
import { combineReducers } from 'redux';
import proposalReducer from './proposalReducer';


const rootReducer = combineReducers({
  contents: proposalReducer,
});

export default rootReducer;
