import React, { useReducer } from 'react';

function inValid(state, action) {
  console.log(state, action);
  return action.value.length < 5 ? (action.style.color = 'red') : false;
}

function reducer(state, action) {
  if (action.name === 'name') {
    inValid(state, action);
    return { ...state, [action.name]: action.value };
  } else {
    return state;
  }
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input type="text" name="name" data-name="name" onChange={onChange} />
        <br />
        <input
          type="text"
          name="nickname"
          data-name="nick"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <div>
          <p>이름: {name}</p>
        </div>

        <div>
          <p>닉네임: {nickname}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
