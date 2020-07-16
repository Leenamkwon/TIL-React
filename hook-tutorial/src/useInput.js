import { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function useInput(initForm) {}
