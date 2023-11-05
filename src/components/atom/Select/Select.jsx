import { forwardRef } from 'react'

import { Select as AntSelect } from 'antd'

const Select = forwardRef(
  ({ placeholder, selectList, setFieldValue, ...rest }, ref) => {
    return (
      <AntSelect
        onChange={setFieldValue}
        placeholder={placeholder}
        options={selectList}
        ref={ref}
        {...rest}
      />
    )
  },
)

export default Select
