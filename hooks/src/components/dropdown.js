import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const dropFormEl = useRef(null);

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (!dropFormEl.current.contains(e.target)) {
        setOpen(false);
      }
    });
  });

  let RenderedOptions = options.map((option) => {
    if (option.color === selected.color) {
      // React에서는 null을 반환하면 아무것도 렌더링 하지 않음.
      return null;
    }

    return (
      <div
        key={options.color}
        className='item'
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className='ui form'>
      <div className='field'>
        <label className='label'>Select a Color</label>
        <div
          ref={dropFormEl}
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {RenderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
