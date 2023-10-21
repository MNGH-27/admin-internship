import * as yup from 'yup'

export const masterSchema = yup.object().shape({
  first_name: yup.string().required('مقدار نام الزامی است').default(''),
  last_name: yup.string().required('مقدار نام خانوادگی الزامی است').default(''),
  email: yup
    .string()
    .email('ایمیل را به درستی وارد کنید')
    .required('مقدار ایمیل الزامی است')
    .default(''),
  national_code: yup
    .string()
    .matches(/^\d+$/, 'مقدار کد ملی باید عدد باشد')
    .length(10, 'کد ملی باید 10 رقمی باشد')
    .required('مقدار کدملی الزامی است')
    .default(''),
  phone_number: yup
    .string()
    .matches(/^09\d{9}$/, 'شماره تلفن را به درستی وارد کنید')
    .length(11, 'شماره مبایل باید 11 رقمی باشد')
    .required('مقدار شماره تلفن الزامی است')
    .default(''),
  personal_code: yup
    .string()
    .matches(/^\d+$/, 'مقدار کد پرسنلی باید عدد باشد')
    .length(10, 'مقدار کد پرسنلی باید 10 رقمی باشد')
    .required('مقدار کدپرسنلی الزامی است')
    .default(''),
  faculty_id: yup.string().required('مقدار دانشکده الزامی است').default(''),
})
