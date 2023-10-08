import { Table as AntTable } from 'antd'
const Table = ({ headerList, data, pagination = false, ...rest }) => {
  return (
    <AntTable
      columns={headerList}
      dataSource={data}
      pagination={false}
      {...rest}
    />
  )
}

export default Table
