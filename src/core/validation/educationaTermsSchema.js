import * as yup from 'yup'

export const educationalTermsSchema = yup.object().shape({
   name: yup.string().required('مقدار نام الزامی است').default(''),
   start_date: yup.date().typeError('تاریخ را به درستی وارد کنید').required('مقدار تاریخ شروع الزامی است'),
   end_date: yup.date().typeError('تاریخ را به درستی وارد کنید').required('مقدار تاریخ پایان الزامی است'),
})
