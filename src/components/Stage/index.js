import React from 'react';

const Stage = ({ currentStage, stage, children }) => {
  if (currentStage === stage) return <>{children}</>;
  return <></>;
};

export default Stage;
