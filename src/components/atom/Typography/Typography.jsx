import { Typography as AntTypography } from 'antd'

const Typography = ({ type = 'base', children, ...rest }) => {
   return (
      <AntTypography text-type={type} {...rest}>
         {children}
      </AntTypography>
   )
}

export default Typography
