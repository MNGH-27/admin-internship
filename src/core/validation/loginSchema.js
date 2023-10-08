import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  username: yup.string().required('مقدار نام کاربری الزامی است').default(''),
  password: yup.string().required('مقدار رمزعبور الزامی است').default(''),
})
