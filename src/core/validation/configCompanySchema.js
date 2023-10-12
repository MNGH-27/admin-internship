import * as yup from 'yup'

export const configCompanySchema = yup.object().shape({
  company_name: yup.string().required('مقدار نام شرکت الزامی است').default(''),
  company_phone: yup
    .string()
    .required('مقدار تلفن شرکت الزامی است')
    .default(''),
  company_number: yup
    .string()
    .required('مقدار شماره ثبت شرکت الزامی است')
    .default(''),
  company_registry_code: yup
    .string()
    .required('مقدار شناسه شرکت الزامی است')
    .default(''),
  company_postal_code: yup
    .string()
    .required('مقدار کد پستی الزامی است')
    .default(''),
  company_category: yup
    .string()
    .required('مقدار نوع شرکت الزامی است')
    .default(''),
  company_type: yup.string().required('مقدار نوع شرکت الزامی است').default(''),
  company_address: yup
    .string()
    .required('مقدار آدرس شرکت الزامی است')
    .default(''),

  // manager details schema
  first_name: yup.string().required('مقدار نام سرپرست الزامی است').default(''),
  last_name: yup
    .string()
    .required('مقدار نام خانوادگی سرپرست الزامی است')
    .default(''),
  email: yup
    .string()
    .email('ایمیل را به درستی وارد کنید')
    .required('مقدار ایمیل سرپرست الزامی است')
    .default(''),
  national_code: yup
    .string()
    .required('مقدار کدملی سرپرست الزامی است')
    .default(''),
  username: yup
    .string()
    .required('مقدار نام کاربری سرپرست الزامی است')
    .default(''),
  phone_number: yup
    .string()
    .required('مقدار تلفن سرپرست الزامی است')
    .default(''),
  faculty: yup.string().required('مقدار دانشکده الزامی است').default(''),
})
