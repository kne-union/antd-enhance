import React from 'react';
import { Popconfirm, Button, Modal } from 'antd';

const ConfirmButton = ({ message, onClick, onCancel, confirmIcon, disabled, showCancel, cancelText, isModal, okText, ...props }) => {
  if (isModal) {
    return (
      <Button
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
    );
  }
  return (
    <Popconfirm title={message} onConfirm={onClick} onCancel={onCancel} icon={confirmIcon} disabled={disabled} showCancel={showCancel} cancelText={cancelText} okText={okText}>
      <Button {...props} />
    </Popconfirm>
  );
};

ConfirmButton.defaultProps = {
  message: '确定要删除吗？',
  isModal: false
};

export default ConfirmButton;
