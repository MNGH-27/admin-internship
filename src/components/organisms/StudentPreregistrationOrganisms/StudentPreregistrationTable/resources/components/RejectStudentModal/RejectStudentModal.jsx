import { Button, Input, Modal } from '@atom/index'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { IoPersonRemoveSharp } from 'react-icons/io5'
import { useMutation } from 'react-query'
import toast from 'react-hot-toast'
import { FormContainer } from '@molecule/index'
import { putUnVarifyStudentPreRegestration } from '@core/services'
import { useQueryClient } from 'react-query'
const RejectStudentModal = ({ isShow, onClose, data }) => {
   const queryClient = useQueryClient()

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
      mutationFn: (detail) =>
         putUnVarifyStudentPreRegestration({
            student_id: data?.id,
            detail,
         }),
      onSuccess: (response) => {
         toast.success(response.message)
         //refetch data
         queryClient.invalidateQueries({ queryKey: ['pre_registration_list'] })
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
