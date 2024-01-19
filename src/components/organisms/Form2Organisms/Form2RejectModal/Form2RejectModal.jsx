import React from 'react'
import { Button, Input, Modal } from '@atom/index'
import { useMutation, useQueryClient } from 'react-query'
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormContainer } from '@molecule/index'
import { IoPersonRemoveSharp } from 'react-icons/io5'
import { putUnVerifySingleFormHttp } from '@core/services'
import { useRouter } from 'next/navigation'

const Form2RejectModal = ({ isShow, onClose, id, formStage, status, rejection_reason }) => {
   const queryClient = useQueryClient()
   const { push } = useRouter()

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
   const { mutate, isLoading: isRejectingStudent } = useMutation({
      mutationFn: (rejection_reason) => putUnVerifySingleFormHttp({ id, formStage, rejection_reason }),
      onSuccess: () => {
         toast.success('رد فرم دو دانشجو با موفقیت انجام شد')
         push(`/dashboard/students/form/student-form?studentId=${id}`)
         onClose()
         queryClient.invalidateQueries({ queryKey: ['single_student_form_stage'] })
         queryClient.invalidateQueries({ queryKey: ['single_student_form'] })
      },
      onError: () => {
         toast.error('رد فرم شماره دو دانشجو ناموفق بود')
      },
   })

   return (
      <Modal isShow={isShow} onClose={onClose}>
         <form
            onSubmit={handleSubmit((values) => mutate(values))}
            className="flex flex-col items-start justify-center gap-3"
         >
            <span className="text-[#222124] text-xl font-semibold">رد کردن دانشجو</span>
            <span className="text-[#5F5F61] text-xs">ایا از رد فرم دو دانشجو اطمینان دارید ؟</span>

            {Number(status) === 3 ? (
               <div className="flex flex-col items-start justify-start gap-2 w-full">
                  <span>توضیحات</span>
                  <div className="border border-gray-400 rounded-md bg-gray-200 w-full p-3 text-gray-600 font-medium text-sm">
                     {rejection_reason}
                  </div>
               </div>
            ) : (
               <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                     <FormContainer errors={errors} label="توضیحات" name={field.name}>
                        <Input {...field} type="textArea" placeholder="توضیحات . . ." />
                     </FormContainer>
                  )}
               />
            )}
            <Button
               disabled={Number(status) === 3}
               loading={isRejectingStudent}
               htmlType="submit"
               onClick={handleSubmit}
               icon={<IoPersonRemoveSharp size={20} />}
               type="primary"
               className={`${Number(status) === 3 ? '' : '!bg-red-700'}`}
            >
               رد کردن
            </Button>
         </form>
      </Modal>
   )
}

export default Form2RejectModal
