import React from 'react';

const ExchangeTypeChoices = ({ exchange, setExchange, setScene }) => {
  const nextScene = () => {
    setScene('chooseTypeFinished');
  };

  const handleClickPlusBtn = () => {
    setExchange({ ...exchange, type: 'plus' });
    nextScene();
  };

  const handleClickMinusBtn = () => {
    setExchange({ ...exchange, type: 'minus' });
    nextScene();
  };

  return (
    <>
      <button className="minus" onClick={handleClickMinusBtn}>
        Thêm khoản chi
      </button>
      <button className="plus" onClick={handleClickPlusBtn}>
        Thêm khoản thu
      </button>
    </>
  );
};

export default ExchangeTypeChoices;
