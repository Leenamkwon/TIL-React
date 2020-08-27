import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const dropFormEl = useRef(null);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (!dropFormEl.current.contains(e.target)) {
        setOpen(false);
      }
      return;
    };
    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  let RenderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      // React에서는 null을 반환하면 아무것도 렌더링 하지 않음.
      return null;
    }

    return (
      <div
        key={options.value}
        className='item'
        onClick={(e) => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className='ui form' ref={dropFormEl}>
      <div className='field'>
        <label className='label'>{label}</label>
        <div
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
