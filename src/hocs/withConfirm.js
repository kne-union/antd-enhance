import {Modal} from 'antd';

const withConfirm = (WrappedComponent) => {
    return ({onClick, message = '确定要删除吗？', ...props}) => <WrappedComponent {...props} onClick={(e) => {
        Modal.confirm({
            content: message, onOk: () => {
                onClick && onClick(e);
            }
        });
    }}/>
};

export default withConfirm;