import React, { Fragment, useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleclick = (index) => {
    setActiveIndex(index);

    if (activeIndex === index) {
      setActiveIndex(null);
    }
  };

  const renderItem = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <Fragment key={index}>
        <div className={`title ${active}`} onClick={() => onTitleclick(index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });

  return <div className='ui styled accordion'>{renderItem}</div>;
};

export default Accordion;
