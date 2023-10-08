import { Modal as AntModal } from 'antd'

const Modal = ({ children, isShow, onClose, ...rest }) => {
  return (
    <AntModal
      footer={false}
      open={isShow}
      onCancel={onClose}
      destroyOnClose
      {...rest}
    >
      {children}
    </AntModal>
  )
}

export default Modal
