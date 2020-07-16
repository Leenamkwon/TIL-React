import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (number) => {
  console.log(number);
  console.log('평균값 계산중');
  if (number.length === 0) return 0;
  const sum = number.reduce((a, b) => (a += b.number), 0);
  return (sum / number.length).toFixed(2);
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    let id = list.length + 1;
    const nextList = list.concat({ number: parseInt(number, 10), id });
    setList(nextList);
    setNumber('');
    inputEl.current.focus();
  }, [number, list]);

  const onDelete = useCallback(
    (e) => {
      const nextID = +e.target.id;
      const updateList = list.filter((item) => item.id !== nextID);
      setList(updateList);
    },
    [list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="number" value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}> 등록 </button>
      <ul>
        {list.map((value, index) => {
          return (
            <li key={index} id={value.id} onClick={onDelete}>
              {value.number}
            </li>
          );
        })}
      </ul>
      <div>평균값: {avg}</div>
    </div>
  );
};

export default Average;
