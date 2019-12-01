import React from 'react';

const Scene = ({
  currentScene,
  scene,
  callback,
  className,
  children,
  duration
}) => {
  if (currentScene === scene) {
    if (duration && callback) {
      setTimeout(() => {
        callback();
      }, duration);
    }
  
    return <div className={className}>{children}</div>;
  }

  return <></>;
};

export default Scene;
