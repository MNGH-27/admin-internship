import { Tooltip as AntTooltip } from 'antd'
const Tooltip = ({ text, children }) => {
  return (
    <AntTooltip placement="top" title={text}>
      {children}
    </AntTooltip>
  )
}

export default Tooltip
