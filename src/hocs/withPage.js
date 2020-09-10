import React, {useState} from 'react';
import {setting} from '../preset';

export default ((WrappedComponent) => ({data, ...props}) => {
  const [current, setCurrent] = useState(setting.withPage.initCurrent);
  return <WrappedComponent {...props} data={Object.assign({}, data, setting.withPage.transform({page: current}))} onPageChange={(page) => {
    setCurrent(page);
  }}/>;
});