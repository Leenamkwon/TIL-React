import React, { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'inc') {
    return { ...state, value: state.value + 1, counter: '상승 counter' };
  } else {
    return { ...state, value: state.value - 1, counter: '하락 counter' };
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    value: 0,
    counter: 'counter'
  });

  return (
    <div>
      <p>
        현재 {state.counter} 값은 {state.value}입니다.
      </p>
      <button onClick={() => dispatch({ type: 'inc' })}>+1</button>
      <button onClick={() => dispatch({ type: 'dec' })}>-1</button>
    </div>
  );
};

export default Counter;
