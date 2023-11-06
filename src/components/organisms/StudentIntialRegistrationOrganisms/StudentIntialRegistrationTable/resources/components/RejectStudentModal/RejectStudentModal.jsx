'use client'

import { Button, Input, Modal } from '@atom/index'
import { putUnVarifyStudentInitialRegestration } from '@core/services'
import { IoPersonRemoveSharp } from 'react-icons/io5'
import * as yup from 'yup'

import { useMutation } from 'react-query'
import { FormContainer } from '@molecule/index'
import toast from 'react-hot-toast'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const RejectStudentModal = ({ isShow, onClose, refetch, data }) => {
   const schema = yup.object().shape({
      description: yup.string().required('مقدار توضیحات الزامی است'),
   })

   const {
      handleSubmit,
      control,
      formState: { errors },
   } = useForm({
      defaultValues: { ...schema.getDefault() },
      resolver: yupResolver(schema),
   })

   const { mutate, isLoading } = useMutation({
      mutationKey: ['unverify_initial_registration'],
      mutationFn: (detail) =>
         putUnVarifyStudentInitialRegestration({
            student_id: data?.id,
            detail,
         }),
      onSuccess: (response) => {
         toast.success(response.message)
         //refetch data
         refetch()
         //close modal
         onClose()
      },
   })

   return (
      <Modal isShow={isShow} onClose={onClose}>
         <form
            onSubmit={handleSubmit((values) => mutate(values))}
            className="flex flex-col items-start justify-center gap-3"
         >
            <span className="text-[#222124] text-xl font-semibold">رد کردن دانشجو</span>
            <span className="text-[#5F5F61] text-xs">
               آیا از رد کردن دانشجو &quot;{data?.name} {data?.last_name}&quot; به شماره دانشجویی {data?.student_number}{' '}
               مطمئن هستید؟
            </span>

            <Controller
               name="description"
               control={control}
               render={({ field }) => (
                  <FormContainer errors={errors} label="توضیحات" name={field.name}>
                     <Input {...field} type="textArea" placeholder="توضیحات . . ." />
                  </FormContainer>
               )}
            />
            <Button
               loading={isLoading}
               htmlType="submit"
               onClick={handleSubmit}
               icon={<IoPersonRemoveSharp size={20} />}
               type="primary"
               className="!bg-red-700"
            >
               رد کردن
            </Button>
         </form>
      </Modal>
   )
}

export default RejectStudentModal
