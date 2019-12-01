import React, { useState, useEffect } from 'react';
import { IoIosAdd } from 'react-icons/io';

import ccl from '../../utils/ccl';
import useHistories from '../../utils/App/useHistories';

import Exchange from '../Exchange';

import Stage from '../../components/Stage';
import DisplayMoney from '../../components/DisplayMoney';
import ListExchange from '../../components/ListExchange';

function App() {
  const Histories = useHistories();
  const [stage, setStage] = useState('root');

  useEffect(() => {
    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
      setStage('root');
    }
  }, []);

  const closeExchange = () => {
    setStage('root');
  };

  const onCloseExchange = exchange => {
    Histories.add(exchange);
  };

  return (
    <div className="App">
      <div className={ccl({ RootScreen: true, blur: stage !== 'root' })}>
        <DisplayMoney amount={Histories.total()} />
        <ListExchange exchanges={Histories.getAll()} />
        <div className="CreateTransaction">
          <button onClick={() => setStage('exchange')}>
            <IoIosAdd />
          </button>
        </div>
      </div>
      <Stage stage="exchange" currentStage={stage}>
        <Exchange
          closeExchange={closeExchange}
          onCloseExchange={onCloseExchange}
        ></Exchange>
      </Stage>
    </div>
  );
}

export default App;
