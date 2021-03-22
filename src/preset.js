import React from 'react';

export const setting = {
    withLayerInstall: (WrappedComponent) => (props) => <WrappedComponent {...props}/>,
    withPage: {
        initCurrent: 1,
        transform: (params) => params
    }
};

export default (options) => {
    return Object.assign(setting, options);
};
