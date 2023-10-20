import { Input, Select } from '@atom/index'
import { FormContainer } from '@molecule/index'
import { TbListDetails } from 'react-icons/tb'

const ConfigCompanyManagerDetail = ({ values, handleChange }) => {
  return (
    <div className="mb-4">
      <div className="text-xl font-semibold flex items-center justify-start gap-x-2 mb-2">
        <TbListDetails size={24} />
        <span>اطلاعات سرپرست شرکت</span>
      </div>
      <div className="grid grid-cols-2 gap-y-6 sm:gap-y-10 sm:gap-x-10">
        <FormContainer label="نام سرپرست" name="first_name">
          <Input
            name="first_name"
            onChange={handleChange}
            value={values.first_name}
          />
        </FormContainer>

        <FormContainer label="نام خانوادگی سرپرست" name="last_name">
          <Input
            name="last_name"
            onChange={handleChange}
            value={values.last_name}
          />
        </FormContainer>

        <FormContainer label="ایمیل سرپرست" name="email">
          <Input name="email" onChange={handleChange} value={values.email} />
        </FormContainer>
        <FormContainer label="کدملی سرپرست" name="national_code">
          <Input
            name="national_code"
            onChange={handleChange}
            value={values.national_code}
          />
        </FormContainer>
        <FormContainer label="نام کاربری سرپرست" name="username">
          <Input
            name="username"
            onChange={handleChange}
            value={values.username}
          />
        </FormContainer>
        <FormContainer label="تلفن سرپرست" name="phone_number">
          <Input
            name="phone_number"
            onChange={handleChange}
            value={values.phone_number}
          />
        </FormContainer>

        <FormContainer label="دانشکده" name="faculty">
          <Select
          // value={JSON.stringify(facultiesIntranceContainer)}
          // onChange={(e) =>
          //   setfacultiesIntranceContainer(JSON.parse(e.target.value))
          // }
          />
        </FormContainer>
      </div>
    </div>
  )
}

export default ConfigCompanyManagerDetail
