import { Badge as AntBadge } from 'antd'
const Badge = ({ offset, count, children, ...rest }) => {
  return (
    <AntBadge offset={offset} count={count} {...rest}>
      {children}
    </AntBadge>
  )
}

export default Badge
