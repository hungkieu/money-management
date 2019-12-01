import React from 'react';

import DisplayMoney from '../../components/DisplayMoney';

import { GoCheck, GoX } from 'react-icons/go';

const ExchangeAmount = ({
  exchange,
  setExchange,
  setScene,
  onCloseExchange
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.addEventListener('blur', function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.focus();
      });
      inputRef.current.addEventListener('keypress', function(event) {
        if (event && event.key === "Enter" && event.keyCode === 13) {
          handleClickOk();
        }
      });
    }
  });

  const handleChange = (event) => {
    event.preventDefault();

    if (inputRef && inputRef.current) {
      const amount =
        Number(inputRef.current.value) * (exchange.type === 'plus' ? 1 : -1);
      setExchange({ ...exchange, amount });
    }
  };

  const handleClickCancel = () => {
    setScene('amountFinished');
  };

  const handleClickOk = () => {
    if (exchange.amount && Number(exchange.amount) !== 0)
      onCloseExchange({ ...exchange, date: Date.now() });
    setScene('amountFinished');
  };

  return (
    <>
      <input
        ref={inputRef}
        type="number"
        min="0"
        max="99999999999"
        onChange={handleChange}
        onKeyUp={handleChange}
      ></input>
      <DisplayMoney amount={exchange.amount} />
      <div className="tool">
        <button className="cancel" onClick={handleClickCancel}>
          <GoX />
        </button>
        <button className="ok" onClick={handleClickOk}>
          <GoCheck />
        </button>
      </div>
    </>
  );
};

export default ExchangeAmount;
