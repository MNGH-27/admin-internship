import { Button as AntButton } from 'antd'

const Button = ({ htmlType = 'button', className = '', children, ...rest }) => {
  return (
    <AntButton
      htmlType={htmlType}
      className={'flex items-center justify-center ' + className}
      {...rest}
    >
      {children}
    </AntButton>
  )
}

export default Button
