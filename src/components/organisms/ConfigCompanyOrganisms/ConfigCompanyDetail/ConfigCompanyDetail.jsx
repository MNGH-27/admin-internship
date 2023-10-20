import { Input } from '@atom/index'
import { FormContainer } from '@molecule/index'

import { TbListDetails } from 'react-icons/tb'

const ConfigCompanyDetail = ({ values, handleChange }) => {
  return (
    <div className="mb-4">
      <div className="text-xl font-semibold flex items-center justify-start gap-x-2 mb-2">
        <TbListDetails size={24} />
        <span>اطلاعات شرکت</span>
      </div>
      <div className="grid grid-cols-2 gap-y-6 sm:gap-y-10 sm:gap-x-10">
        <FormContainer label="نام شرکت" name="company_name">
          <Input
            name="company_name"
            onChange={handleChange}
            value={values.company_name}
          />
        </FormContainer>
        <FormContainer label="تلفن شرکت" name="company_phone">
          <Input
            name="company_phone"
            onChange={handleChange}
            value={values.company_phone}
          />
        </FormContainer>
        <FormContainer label="شماره ثبت شرکت" name="company_number">
          <Input
            name="company_number"
            onChange={handleChange}
            value={values.company_number}
          />
        </FormContainer>
        <FormContainer label="شناسه شرکت" name="company_registry_code">
          <Input
            name="company_registry_code"
            onChange={handleChange}
            value={values.company_registry_code}
          />
        </FormContainer>
        <FormContainer label="کد پستی" name="company_postal_code">
          <Input
            name="company_postal_code"
            onChange={handleChange}
            value={values.company_postal_code}
          />
        </FormContainer>
        <FormContainer label="نوع شرکت" name="company_category">
          <Input
            name="company_category"
            onChange={handleChange}
            value={values.company_category}
          />
        </FormContainer>
        <FormContainer label="نوع شرکت" name="company_type">
          <Input
            name="company_type"
            onChange={handleChange}
            value={values.company_type}
          />
        </FormContainer>
        <FormContainer
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
        </FormContainer>
      </div>
    </div>
  )
}

export default ConfigCompanyDetail
