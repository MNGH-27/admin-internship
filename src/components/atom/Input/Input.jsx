import { Input as AntInput } from 'antd'

const Input = ({ className = '', type = 'default', ...rest }) => {
  if (type === 'password') {
    return <AntInput.Password autoComplete="off" {...rest} />
  }

  if (type === 'textArea') {
    return (
      <AntInput.TextArea
        className={'min-h-[50px] ' + className}
        autoComplete="off"
        {...rest}
      />
    )
  }

  return <AntInput autoComplete="off" {...rest} />
}

export default Input
