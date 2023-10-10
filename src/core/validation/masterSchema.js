import * as yup from 'yup'

export const masterSchema = yup.object().shape({
  first_name: yup.string().required('مقدار نام الزامی است').default(''),
  last_name: yup.string().required('مقدار نام خانوادگی الزامی است').default(''),
  email: yup
    .string()
    .email('ایمیل را به درستی وارد کنید')
    .required('مقدار ایمیل الزامی است')
    .default(''),
  national_code: yup.string().required('مقدار کدملی الزامی است').default(''),
  phone_number: yup
    .string()
    .required('مقدار شماره تلفن الزامی است')
    .default(''),
  personal_code: yup.string().required('مقدار کدپرسنلی الزامی است').default(''),
  faculty: yup.string().required('مقدار دانشکده الزامی است').default(''),
})
