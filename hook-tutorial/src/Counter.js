import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return { value: state.value + 1 };
    case 'dec':
      return { value: state.value - 1 };
    default:
      return;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>현재 카운터 값은 {state.value}입니다.</p>
      <button onClick={dispatch({ type: 'inc' })}>+1</button>
      <button onClick={dispatch({ type: 'dec' })}>-1</button>
    </div>
  );
};

export default Counter;
