import { Input } from '@atom/index'
import { FromContainer } from '@molecule/index'

import { TbListDetails } from 'react-icons/tb'

const ConfigCompanyDetail = ({ values, handleChange }) => {
  return (
    <div className="mb-4">
      <div className="text-xl font-semibold flex items-center justify-start gap-x-2 mb-2">
        <TbListDetails size={24} />
        <span>اطلاعات شرکت</span>
      </div>
      <div className="grid grid-cols-2 gap-y-6 sm:gap-y-10 sm:gap-x-10">
        <FromContainer label="نام شرکت" name="company_name">
          <Input
            name="company_name"
            onChange={handleChange}
            value={values.company_name}
          />
        </FromContainer>
        <FromContainer label="تلفن شرکت" name="company_phone">
          <Input
            name="company_phone"
            onChange={handleChange}
            value={values.company_phone}
          />
        </FromContainer>
        <FromContainer label="شماره ثبت شرکت" name="company_number">
          <Input
            name="company_number"
            onChange={handleChange}
            value={values.company_number}
          />
        </FromContainer>
        <FromContainer label="شناسه شرکت" name="company_registry_code">
          <Input
            name="company_registry_code"
            onChange={handleChange}
            value={values.company_registry_code}
          />
        </FromContainer>
        <FromContainer label="کد پستی" name="company_postal_code">
          <Input
            name="company_postal_code"
            onChange={handleChange}
            value={values.company_postal_code}
          />
        </FromContainer>
        <FromContainer label="نوع شرکت" name="company_category">
          <Input
            name="company_category"
            onChange={handleChange}
            value={values.company_category}
          />
        </FromContainer>
        <FromContainer label="نوع شرکت" name="company_type">
          <Input
            name="company_type"
            onChange={handleChange}
            value={values.company_type}
          />
        </FromContainer>
        <FromContainer
          label="آدرس شرکت"
          name="company_address"
          className="col-span-full"
        >
          <Input
            type="textArea"
            name="company_address"
            onChange={handleChange}
            value={values.company_address}
          />
        </FromContainer>
      </div>
    </div>
  )
}

export default ConfigCompanyDetail
