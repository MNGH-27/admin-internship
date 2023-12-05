'use client'

import toast from 'react-hot-toast'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button, Input, Select, Spinner } from '@atom/index'
import { masterSchema } from '@core/validation'
import { FormContainer } from '@molecule/index'

import { AiFillEdit } from 'react-icons/ai'
import { editMasterHttp, getSingleMasterEditHttp, getfacultyListHttp } from '@core/services'
import { convertFacultyList } from '@core/common'

const EditMasterModal = ({ onClose, data }) => {
   const queryClient = useQueryClient()

   const { data: singleMaster, isLoading: isSingleMasterLoading } = useQuery({
      queryKey: [`single_master`],
      queryFn: () => getSingleMasterEditHttp({ id: data.id }),
      cacheTime: 0,
      staleTime: 0,
      enabled: !!data?.id,
   })

   const { data: facultyList, isLoading: isLoadingFaculty } = useQuery({
      queryKey: ['faculty_list'],
      queryFn: getfacultyListHttp,
   })

   const {
      handleSubmit,
      control,
      formState: { errors },
      setError,
   } = useForm({
      defaultValues: {
         ...singleMaster?.data,
         faculty_id: singleMaster?.data?.faculty.id,
      },
      resolver: yupResolver(masterSchema),
   })

   const { mutate, isLoading: isSubmiting } = useMutation({
      mutationFn: (data) => editMasterHttp({ ...data, id: data.id }),
      onSuccess: () => {
         //revalidate data of master_list
         queryClient.invalidateQueries({ queryKey: ['master_list'] })
         //show that master added successfully
         toast.success('استاد با موفقیت ویرایش شد')
         //close modal
         onClose()
      },
      onError: (error) => {
         if (error.message) {
            for (const singleError in error.message) {
               setError(singleError, {
                  type: 'custom',
                  message: error.message[singleError][0],
               })
            }
         }
         toast.error('ویرایش استاد نا موفق بود')
      },
   })

   if (isSingleMasterLoading) {
      return (
         <div className="flex items-center justify-center w-full my-5">
            <Spinner />
         </div>
      )
   }

   return (
      <div className="flex flex-col items-start justify-center gap-3">
         <span className="text-[#222124] text-xl font-semibold">ویرایش استاد</span>
         <form onSubmit={handleSubmit((values) => mutate(values))} className="flex flex-col gap-y-3 w-full">
            <div className="grid grid-cols-2 gap-5">
               <Controller
                  name="first_name"
                  control={control}
                  defaultValue={singleMaster?.data.first_name}
                  render={({ field }) => (
                     <FormContainer errors={errors} label="نام" name={field.name}>
                        <Input {...field} placeholder="نام خود را وارد کنید . . . " />
                     </FormContainer>
                  )}
               />

               <Controller
                  name="last_name"
                  control={control}
                  defaultValue={singleMaster?.data.last_name}
                  render={({ field }) => (
                     <FormContainer errors={errors} label="نام خانوادگی" name={field.name}>
                        <Input {...field} placeholder="نام خانوادگی خود را وارد کنید . . ." />
                     </FormContainer>
                  )}
               />
               <Controller
                  name="email"
                  control={control}
                  defaultValue={singleMaster?.data.email}
                  render={({ field }) => (
                     <FormContainer errors={errors} label="ایمیل" name={field.name}>
                        <Input {...field} placeholder="ایمیل خود را وارد کنید . . ." />
                     </FormContainer>
                  )}
               />
               <Controller
                  name="national_code"
                  control={control}
                  defaultValue={singleMaster?.data.national_code}
                  render={({ field }) => (
                     <FormContainer errors={errors} label="کد ملی" name={field.name}>
                        <Input {...field} placeholder="کدملی خود را وارد کنید . . ." />
                     </FormContainer>
                  )}
               />
               <Controller
                  name="phone_number"
                  control={control}
                  defaultValue={singleMaster?.data.phone_number}
                  render={({ field }) => (
                     <FormContainer errors={errors} label="شماره تلفن" name={field.name}>
                        <Input {...field} placeholder="شماره تلفن خود را وارد کنید . . ." />
                     </FormContainer>
                  )}
               />
               <Controller
                  name="personal_code"
                  control={control}
                  defaultValue={singleMaster?.data.personal_code}
                  render={({ field }) => (
                     <FormContainer errors={errors} label="کدپرسنلی" name={field.name}>
                        <Input {...field} placeholder="کدپرسنلی خود را وارد کنید . . ." />
                     </FormContainer>
                  )}
               />
               <Controller
                  name="faculty_id"
                  control={control}
                  defaultValue={singleMaster?.data.faculty.id}
                  render={({ field }) => (
                     <FormContainer errors={errors} label="دانشکده" name={field.name}>
                        <Select
                           {...field}
                           loading={isLoadingFaculty}
                           selectList={convertFacultyList(facultyList?.data)}
                        />
                     </FormContainer>
                  )}
               />
            </div>
            <Button
               loading={isSubmiting}
               htmlType="submit"
               icon={<AiFillEdit size={20} />}
               className="w-fit h-auto py-2"
               type="primary"
            >
               ثبت
            </Button>
         </form>
      </div>
   )
}

export default EditMasterModal
