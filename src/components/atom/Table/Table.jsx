import { Table as AntTable } from 'antd'
const Table = ({ headerList, data, ...rest }) => {
  return <AntTable columns={headerList} dataSource={data} {...rest} />
}

export default Table
