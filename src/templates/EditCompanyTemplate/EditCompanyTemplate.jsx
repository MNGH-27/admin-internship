'use client'

import { Button, Spinner } from '@atom/index'

import { IoReturnDownBack } from 'react-icons/io5'

import { ConfigCompanyDetail, ConfigCompanyManagerDetail } from '@organisms/ConfigCompanyOrganisms'

import { configCompanySchema } from '@core/validation/configCompanySchema'

import { AiOutlineUserAdd } from 'react-icons/ai'
import Link from 'next/link'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getSingleCompanyHttp } from '@core/services'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useRouter, useSearchParams } from 'next/navigation'
import { editComapanyHttp } from '@core/services/apis/company/edit_company.api'
import { useEffect } from 'react'

const EditCompanyTemplate = () => {
   const searchParams = useSearchParams()
   const companyId = searchParams.get('companyId')

   const { push } = useRouter()
   const queryClient = useQueryClient()

   const { data, isLoading, isError } = useQuery({
      queryKey: ['single_company'],
      queryFn: () => getSingleCompanyHttp({ id: companyId }),
      enabled: !!companyId,
   })

   useEffect(() => {
      if (!companyId || companyId?.length === 0) push('/dashboard/company')
   }, [companyId])

   const {
      control,
      formState: { errors },
      setError,
      handleSubmit,
   } = useForm({
      resolver: yupResolver(configCompanySchema),
   })

   const { mutate, isLoading: isSubmiting } = useMutation({
      mutationFn: (data) => editComapanyHttp(data, companyId),
      onSuccess: () => {
         //revalidate data of master_list
         queryClient.invalidateQueries({ queryKey: ['companies_list'] })
         //show that master added successfully
         toast.success('شرکت با موفقیت اضافه شد')
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

   if (isError) {
      push('/dashboard/company')
      return <></>
   }

   if (isLoading)
      return (
         <div className="flex items-center justify-center w-full my-5">
            <Spinner />
         </div>
      )

   return (
      <div>
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
         <form
            onSubmit={handleSubmit((values) => {
               const convertedData = {
                  ...values,
               }

               if (typeof convertedData.image === 'string') {
                  delete convertedData.image
               }

               mutate(convertedData)
            })}
         >
            <ConfigCompanyDetail defaultValues={data?.data} control={control} errors={errors} />

            <ConfigCompanyManagerDetail
               defaultValues={data?.data?.company_boss_data}
               control={control}
               errors={errors}
            />

            <Button
               loading={isSubmiting}
               icon={<AiOutlineUserAdd size={24} />}
               htmlType="submit"
               className="h-auto py-3 px-6 ml-auto text-base"
               type="primary"
            >
               ویرایش کردن شرکت
            </Button>
         </form>
      </div>
   )
}

export default EditCompanyTemplate
