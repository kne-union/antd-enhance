import React, { forwardRef } from 'react';
import { Modal } from 'antd';

const withConfirm = WrappedComponent => {
  return forwardRef(({ onClick, message = '确定要删除吗？', ...props }, ref) => (
    <WrappedComponent
      ref={ref}
      {...props}
      onClick={e => {
        Modal.confirm({
          content: message,
          onOk: () => {
            onClick && onClick(e);
          }
        });
      }}
    />
  ));
};

export default withConfirm;
