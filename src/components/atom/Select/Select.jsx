import { Select as AntSelect } from 'antd'

const Select = ({ placeholder, selectList, setFieldValue, ...rest }) => {
  return (
    <AntSelect
      onChange={setFieldValue}
      placeholder={placeholder}
      options={selectList}
      {...rest}
    />
  )
}

export default Select
