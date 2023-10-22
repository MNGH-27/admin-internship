import { Upload as AntUpload } from "antd"
import { Button } from "..";
import { AiOutlineUpload } from "react-icons/ai";
const Upload = ({ ...rest }) => {


    return (
        <AntUpload beforeUpload={() => { return false }} multiple={false} maxCount={1} {...rest}>
            <Button icon={<AiOutlineUpload />}>Upload</Button>
        </AntUpload>
    )
}

export default Upload