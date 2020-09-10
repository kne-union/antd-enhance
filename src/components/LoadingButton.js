import React, { useState } from 'react';
import { Button } from 'antd';

export default ({ onClick, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);
  return <Button {...props} loading={isLoading} onClick={(...args) => {
    setIsLoading(true);
    Promise.resolve(onClick && onClick(...args)).then(() => {
      setIsLoading(false);
    });
  }}/>;
};
