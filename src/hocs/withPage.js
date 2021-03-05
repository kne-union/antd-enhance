import React, {useState} from 'react';
import {setting} from '../preset';

export default ((WrappedComponent) => ({data, params, ...props}) => {
    const [current, setCurrent] = useState(setting.withPage.initCurrent);
    return <WrappedComponent {...props}
                             params={Object.assign({}, params, setting.withPage.transform({page: current}))}
                             data={Object.assign({}, data, setting.withPage.transform({page: current}))}
                             onPageChange={(page) => {
                                 setCurrent(page);
                             }}/>;
});