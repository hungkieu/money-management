import React, { useState } from 'react';

import Scene from '../../components/Scene';
import ExchangeTypeChoices from '../../components/ExchangeTypeChoices';
import ExchangeAmount from '../../components/ExchangeAmount';

const Exchange = ({ closeExchange, onCloseExchange }) => {
  const [scene, setScene] = useState('chooseType');
  const [exchange, setExchange] = useState({});

  const StateToProps = { scene, setScene, exchange, setExchange };

  return (
    <div className="Exchange">
      <Scene
        scene="chooseType"
        currentScene={scene}
        className="ExchangeTypeChoices In"
        In="ExchangeTypeChoicesIn"
      >
        <ExchangeTypeChoices {...StateToProps} />
      </Scene>
      <Scene
        scene="chooseTypeFinished"
        currentScene={scene}
        className="ExchangeTypeChoices In Out"
        duration={600}
        callback={() => setScene('amount')}
        setScene={setScene}
      >
        <ExchangeTypeChoices {...StateToProps} />
      </Scene>
      <Scene scene="amount" currentScene={scene} className="ExchangeAmount">
        <ExchangeAmount onCloseExchange={onCloseExchange} {...StateToProps} />
      </Scene>
      <Scene
        scene="amountFinished"
        currentScene={scene}
        className="ExchangeAmount Out"
        duration={600}
        callback={() => closeExchange()}
      >
        <ExchangeAmount {...StateToProps} />
      </Scene>
    </div>
  );
};

export default Exchange;
