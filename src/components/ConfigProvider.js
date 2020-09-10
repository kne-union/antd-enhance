import React from 'react';
import {ConfigProvider} from 'antd';
import setting from '../preset';

export default (props) => {
  return <ConfigProvider {...setting.config} {...props}/>
};
