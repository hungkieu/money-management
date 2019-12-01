import { useState, useEffect } from 'react';

const useHistories = () => {
  let initialHistory = [
    {
      amount: 0,
      type: 'plus'
    }
  ];

  const JsonData = localStorage.getItem('histories');

  if (JsonData) {
    initialHistory = JSON.parse(JsonData);
  }

  const [histories, setHistories] = useState(initialHistory);

  useEffect(() => {
    localStorage.setItem('histories', JSON.stringify(histories));
  }, [histories]);

  const add = exchange => {
    const nextHistories = [...histories, exchange];
    setHistories(nextHistories);
  };

  const getAll = () => {
    return histories.filter(item => item.date);
  };

  const getIndex = id => {
    return histories.findIndex(i => i.id === id);
  };

  const get = id => {
    return histories[getIndex(id)];
  };

  const remove = id => {
    const nextHistories = [...histories];
    nextHistories.splice(getIndex(id), 1);
    return nextHistories;
  };

  const update = (id, exchange) => {
    const nextHistories = [...histories];
    nextHistories[getIndex(id)] = exchange;
    return nextHistories;
  };

  const total = () => {
    return histories.reduce((cur, acc) => {
      if (acc && acc.amount) return (cur += Number(acc.amount));
      return cur;
    }, 0);
  };

  return {
    add,
    getAll,
    get,
    remove,
    update,
    getIndex,
    total
  };
};

export default useHistories;
