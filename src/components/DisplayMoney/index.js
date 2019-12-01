import React from 'react';
import formatMoney from '../../utils/formatMoney';

const DisplayMoney = ({ amount }) => {
  return (
    <div className="Money">
      <h1>{formatMoney(amount)}</h1>
    </div>
  );
};

export default DisplayMoney;
