import { forwardRef } from 'react'

import { Input as AntInput } from 'antd'

const Input = forwardRef(({ className = '', type = 'default', ...rest }, ref) => {
   if (type === 'password') {
      return <AntInput.Password autoComplete="off" ref={ref} {...rest} />
   }

   if (type === 'textArea') {
      return (
         <AntInput.TextArea
            className={'!min-h-[75px] !max-h-[250px] ' + className}
            autoComplete="off"
            ref={ref}
            {...rest}
         />
      )
   }

   return <AntInput autoComplete="off" {...rest} ref={ref} />
})

Input.displayName = 'Input'

export default Input
