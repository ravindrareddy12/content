// contentActions.js
// actions/proposalContent.js
export const ADD_PROPOSALS = 'ADD_PROPOSALS';
export const SET_PROPOSALS = 'SET_PROPOSALS';

// actions/proposalContent.js
export const addProposal = (proposal) => ({
  type: ADD_PROPOSALS,
  payload: proposal,
});

export const setProposals = (proposals) => ({
  type: SET_PROPOSALS,
  payload: proposals,
});
