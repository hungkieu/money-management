import React from 'react';
import formatMoney from '../../utils/formatMoney';
import formatDate from '../../utils/formatDate';

const Exchange = ({ amount, type, date }) => {
  const typeS = type === 'plus' ? '+' : '';

  return (
    <li className={type}>
      <div className="Amount">
        {typeS} {formatMoney(amount)}
      </div>
      <div className="Date">{formatDate(date)}</div>
    </li>
  );
};

const ListExchange = ({ exchanges }) => {
  let exchangeItems;
  if (exchanges.length === 0)
    exchangeItems = (
      <div style={{ marginTop: '10px' }}>Bạn chưa có giao dịch nào.</div>
    );
  else
    exchangeItems = exchanges.map((item, index) => {
      return <Exchange {...item} key={index}></Exchange>;
    });

  return (
    <div className="ListExchange">
      <h3>Lịch sử giao dịch</h3>
      <ul>{exchangeItems}</ul>
    </div>
  );
};

export default ListExchange;
