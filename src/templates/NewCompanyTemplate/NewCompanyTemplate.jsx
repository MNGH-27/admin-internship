'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@atom/index'
import {
  ConfigCompanyDetail,
  ConfigCompanyManagerDetail,
} from '@organisms/ConfigCompanyOrganisms'
import { configCompanySchema } from '@core/validation/configCompanySchema'
import { createNewComapanyHttp } from '@core/services'

import { IoReturnDownBack } from 'react-icons/io5'
import { AiOutlineUserAdd } from 'react-icons/ai'

const NewCompanyTemplate = () => {
  const { push } = useRouter()
  const queryClient = useQueryClient()

  const {
    control,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm({
    defaultValues: { ...configCompanySchema.getDefault() },
    resolver: yupResolver(configCompanySchema),
  })

  const { mutate, isLoading: isSubmiting } = useMutation({
    mutationFn: (data) => createNewComapanyHttp(data),
    onSuccess: () => {
      //revalidate data of master_list
      queryClient.invalidateQueries(['companies_list'])
      //show that master added successfully
      toast.success('استاد با موفقیت اضافه شد')
      //redirect to company list
      push('/dashboard/company')
    },
    onError: (error) => {
      if (error.message) {
        for (const singleError in error.message) {
          setError(`${singleError.trim()}`, {
            type: 'custom',
            message: error.message[singleError][0],
          })
        }
      }
      toast.error('اضافه کردن شرکت ناموفق بود')
    },
  })

  return (
    <div className="mb-12">
      <Link
        type="primary"
        className="flex items-center justify-start gap-x-2 py-2 px-4 rounded-md bg-[#003B7E] text-white w-fit"
        href={'/dashboard/company'}
      >
        <IoReturnDownBack size={20} />
        بازگشت
      </Link>
      <div className="flex flex-col items-start w-full gap-1 my-4">
        <span className="text-2xl font-semibold">اضافه کردن شرکت جدید</span>
        <span className="text-sm font-medium text-gray-400">
          برای اضافه کردن اطلاعات مورد هر نیاز هر شرکت را وارد کنید{' '}
        </span>
      </div>
      <form onSubmit={handleSubmit((values) => mutate(values))}>
        <ConfigCompanyDetail control={control} errors={errors} />

        <ConfigCompanyManagerDetail control={control} errors={errors} />

        <Button
          loading={isSubmiting}
          icon={<AiOutlineUserAdd size={24} />}
          htmlType="submit"
          className="h-auto py-3 px-6 ml-auto text-base"
          type="primary"
        >
          اضافه کردن شرکت
        </Button>
      </form>
    </div>
  )
}

export default NewCompanyTemplate
