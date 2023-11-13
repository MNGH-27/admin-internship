import { Dropdown as AntDropDown } from 'antd'

const DropDown = ({ dropDownList, children, ...rest }) => {
   return (
      <AntDropDown
         {...rest}
         menu={{
            items: dropDownList,
         }}
         placement="bottomRight"
         arrow
      >
         {children}
      </AntDropDown>
   )
}

export default DropDown
