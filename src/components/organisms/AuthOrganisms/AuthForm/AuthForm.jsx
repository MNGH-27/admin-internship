'use client'

import { useRouter } from 'next/navigation'
import { FiLogIn } from 'react-icons/fi'
import { Button, Input } from '@atom/index'

import { loginSchema } from '@core/validation'
import { setCookie } from 'cookies-next'
import { loginUserHttp } from '@core/services'
import { useMutation } from 'react-query'
import toast from 'react-hot-toast'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormContainer } from '@molecule/index'

const AuthForm = () => {
   const { push } = useRouter()

   const {
      handleSubmit,
      control,
      formState: { errors },
   } = useForm({
      defaultValues: { ...loginSchema.getDefault() },
      resolver: yupResolver(loginSchema),
   })

   const { mutate, isLoading } = useMutation({
      mutationFn: (data) => loginUserHttp(data),
      onError: () => {
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
      <form className="flex flex-col gap-y-3" onSubmit={handleSubmit((values) => mutate(values))}>
         <Controller
            name="username"
            control={control}
            render={({ field }) => (
               <FormContainer errors={errors} label="نام کاربری" name={field.name}>
                  <Input {...field} />
               </FormContainer>
            )}
         />
         <Controller
            name="password"
            control={control}
            render={({ field }) => (
               <FormContainer errors={errors} label="رمزعبور" name={field.name}>
                  <Input {...field} />
               </FormContainer>
            )}
         />
         <Button icon={<FiLogIn />} loading={isLoading} htmlType="submit" className="mt-5 mr-auto" type="primary">
            ورود
         </Button>
      </form>
   )
}

export default AuthForm
