'use client'

import { useRouter } from 'next/navigation'
import { FiLogIn } from 'react-icons/fi'
import { Button, Input } from '@atom/index'
import { FormContainer } from '@molecule/index'
import { Formik } from 'formik'

import { loginSchema } from '@core/validation'
import { setCookie } from 'cookies-next'
import { loginUserHttp } from '@core/services'
import { useMutation } from 'react-query'
import toast from 'react-hot-toast'

const AuthForm = () => {
  const { push } = useRouter()

  const { mutate, isLoading } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data) => loginUserHttp(data),
    onError: (error) => {
      toast.error('ورود با مشکل مواجه شد')
    },
    onSuccess: (response) => {
      //check ther role of user we get to be admin
      if (response.data.user.role === 'admin') {
        //this user is admin
        setCookie('token', response.data.authorisation.token)
        toast.success('با موفقیت وارد شدید')

        push('/dashboard')
      } else {
        //this is not acceptable user for this panel
        toast.error('ورود با مشکل مواجه شد')
      }
    },
  })

  return (
    <Formik
      initialValues={{ ...loginSchema.getDefault() }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        mutate(values)
      }}
    >
      {({ values, handleSubmit, handleChange }) => (
        <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
          <FormContainer label="نام کاربری" name="username">
            <Input
              name="username"
              onChange={handleChange}
              value={values.username}
            />
          </FormContainer>
          <FormContainer label="رمزعبور" name="password">
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
          </FormContainer>
          <Button
            icon={<FiLogIn />}
            loading={isLoading}
            htmlType="submit"
            className="mt-5 mr-auto"
            type="primary"
          >
            ورود
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default AuthForm
