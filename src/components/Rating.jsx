import React from 'react';

const Rating = props => {
  const rate = Math.round(props.children);
  return <div>{'★'.repeat(rate) + '☆'.repeat(5 - rate)}</div>;
};

export default Rating;
