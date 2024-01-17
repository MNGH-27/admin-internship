import { Upload as AntUpload } from 'antd'
import { Button } from '..'
import { AiOutlineUpload } from 'react-icons/ai'
import { forwardRef } from 'react'
// eslint-disable-next-line no-unused-vars
const Upload = forwardRef(({ value, ...rest }, ref) => {
   return (
      <AntUpload
         beforeUpload={() => {
            return false
         }}
         fileList={value ? [value] : []}
         multiple={false}
         maxCount={1}
         listType="picture"
         {...rest}
      >
         <Button icon={<AiOutlineUpload />}>Upload</Button>
      </AntUpload>
   )
})

Upload.displayName = 'Upload'

export default Upload
