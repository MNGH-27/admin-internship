import { Radio as AntRadio } from 'antd'

const Radio = ({ radioList, setFieldValue, className = '', ...rest }) => {
  return (
    <AntRadio.Group
      {...rest}
      onChange={(e) => setFieldValue(e.target.value)}
      className={'flex items-center justify-start gap-x-1 ' + className}
    >
      {radioList &&
        radioList.map((singleRadio, index) => (
          <AntRadio key={index} value={singleRadio.value}>
            {singleRadio.lable}
          </AntRadio>
        ))}
    </AntRadio.Group>
  )
}

export default Radio
