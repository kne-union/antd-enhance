import ReactDOM from 'react-dom/client';
import compose from '@kne/compose';
import React, { createRef, useState, useImperativeHandle } from 'react';
import { setting } from '../preset';

const withLayer = WrappedComponent => {
  return ({ onCancel, onDestroy, outRef, ...props }) => {
    const [visible, setVisible] = useState(true);
    useImperativeHandle(
      outRef,
      () => {
        return {
          close: () => setVisible(false),
          setVisible,
          visible
        };
      },
      [visible, setVisible]
    );

    return (
      <WrappedComponent
        {...props}
        visible={visible}
        close={() => setVisible(false)}
        onCancel={(...args) => {
          setVisible(false);
          onCancel && onCancel(...args);
        }}
        afterClose={onDestroy}
      />
    );
  };
};

export default WrappedComponent => {
  const LayerComponent = compose(withLayer, setting.withLayerInstall)(WrappedComponent);
  const ref = createRef(null);
  const root = document.createElement('div'),
    body = document.body;
  return props => {
    body.appendChild(root);
    const rootDom = ReactDOM.createRoot(root);
    rootDom.render(
      <LayerComponent
        outRef={ref}
        {...props}
        onDestroy={() => {
          setTimeout(() => {
            rootDom.unmount();
            body.removeChild(root);
          });
        }}
      />
    );
    return ref;
  };
};
