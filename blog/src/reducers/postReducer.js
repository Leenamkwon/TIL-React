export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;

    default:
      return state;
  }
};

// 리듀서는 undefined를 값으로 리턴하면 안된다. undefined외에는 다 가능

// 리듀서는 외부 변수나 함수를 리턴하면 안된다. ex return document.querySelector('#input')

// 리듀서에서 api 요청을 하면 안된다.

// 리듀서는 순수 state와 action으로만 리턴 해야한다.

// 리듀서는 원본 배열을 변경하면 안된다. 불변 객체를 만들어야함.
