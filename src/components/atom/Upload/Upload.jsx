import { Upload as AntUpload } from 'antd'
import { Button } from '..'
import { AiOutlineUpload } from 'react-icons/ai'
import { forwardRef } from 'react'
const Upload = forwardRef(({ ...rest }, ref) => {
  return (
    <AntUpload
      beforeUpload={() => {
        return false
      }}
      multiple={false}
      maxCount={1}
      ref={ref}
      {...rest}
    >
      <Button icon={<AiOutlineUpload />}>Upload</Button>
    </AntUpload>
  )
})

export default Upload
