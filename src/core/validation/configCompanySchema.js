import * as yup from 'yup'

export const configCompanySchema = yup.object().shape({
  company_name: yup.string().required('مقدار نام شرکت الزامی است').default(''),
  company_phone: yup
    .string()
    .matches(/^0\d{10}$/, 'شماره تلفن را به درستی وارد کنید')
    .length(11, 'شماره تلفن باید 11 رقمی باشد')
    .required('مقدار تلفن شرکت الزامی است')
    .default(''),
  company_number: yup
    .string()
    .matches(/^\d+$/, 'مقدار شماره ثبت شرکت باید عدد باشد')
    .length(11, 'شماره ثبت شرکت باید 11 رقمی باشد')
    .required('مقدار شماره ثبت شرکت الزامی است')
    .default(''),
  company_registry_code: yup
    .string()
    .required('مقدار شناسه شرکت الزامی است')
    .min(8, 'شناسه ی شرکت حداقل 8 رقمی است')
    .max(11, 'شناسه ی شرکت حداکثر 11 رقمی است')
    .default(''),
  company_postal_code: yup
    .string()
    .matches(/^\d+$/, 'مقدار کد پستی باید عدد باشد')
    .length(10, 'کد پستی باید 10 رقمی باشد')
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
  image: yup.mixed().required('مقدار لوگو الزامی است'),

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
    .matches(/^\d+$/, 'مقدار کد ملی باید عدد باشد')
    .length(10, 'کد ملی باید 10 رقمی باشد')
    .required('مقدار کدملی سرپرست الزامی است')
    .default(''),
  username: yup
    .string()
    .required('مقدار نام کاربری سرپرست الزامی است')
    .default(''),
  phone_number: yup
    .string()
    .matches(/^09\d{9}$/, 'شماره تلفن را به درستی وارد کنید')
    .length(11, 'شماره تلفن باید 11 رقمی باشد')
    .required('مقدار تلفن سرپرست الزامی است')
    .default(''),
  faculty_id: yup.string().required('مقدار دانشکده الزامی است').default(''),
})
