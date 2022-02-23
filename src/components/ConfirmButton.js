import {Modal, Button} from 'antd';

const ConfirmButton = ({message, onClick, ...props}) => {
    return <Button {...props} onClick={(e) => {
        Modal.confirm({
            content: message, onOk: () => {
                onClick && onClick(e);
            }
        });
    }}/>
};

ConfirmButton.defaultProps = {
    message: '确定要删除吗？'
};

export default ConfirmButton;