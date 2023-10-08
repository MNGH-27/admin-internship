'use client'

import { FiLogIn } from 'react-icons/fi'
import { Button, Input } from '@atom/index'
import { FromContainer } from '@molecule/index'
import { Formik } from 'formik'

import { loginSchema } from '@core/validation'

import { loginUserHttp } from '@core/services'
import { useMutation } from 'react-query'
import toast from 'react-hot-toast'

const AuthForm = () => {
  const { mutate, isLoading } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data) => loginUserHttp(data),
    onError: (error) => {
      toast.error('ورود با مشکل مواجه شد')
    },
    onSuccess: (response) => {
      toast.success('با موفقیت وارد شدید')
      /**
       * TODO: handle response status , redirect , add data to zustand , add data to Token
       */
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
          <FromContainer label="نام کاربری" name="username">
            <Input
              name="username"
              onChange={handleChange}
              value={values.username}
            />
          </FromContainer>
          <FromContainer label="رمزعبور" name="password">
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
          </FromContainer>
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
