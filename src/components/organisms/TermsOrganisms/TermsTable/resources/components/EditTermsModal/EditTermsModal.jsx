import { Button, Input, DatePicker } from '@atom/index'
import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { educationalTermsSchema } from '@core/validation'
import { FormContainer } from '@molecule/index'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { editEducationalTermsHttp } from '@core/services'
import moment from 'moment-jalaali'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const EditTermsModal = ({ onClose, data }) => {
   const queryClient = useQueryClient()

   const {
      control,
      formState: { errors },
      handleSubmit,
      setError,
   } = useForm({
      defaultValues: { ...data },
      resolver: yupResolver(educationalTermsSchema),
   })

   const { mutate, isLoading: isSubmitting } = useMutation({
      mutationFn: (values) => editEducationalTermsHttp(values, data?.id),
      onSuccess: () => {
         //revalidate data of educatioanl_terms_list
         queryClient.invalidateQueries({ queryKey: ['educatioanl_terms_list'] })
         //show that master added successfully
         toast.success('سر ترم با موفقیت ویرایش شد')
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
         toast.error('اضافه کردن شرکت ناموفق بود')
      },
   })

   return (
      <>
         <p className="mb-5 font-semibold">اطلاعات مربوط به ترم را وارد کنید</p>
         <form
            onSubmit={handleSubmit((values) =>
               mutate({
                  ...values,
                  start_date: moment(values.start_date).format('YYYY/MM/DD'),
                  end_date: moment(values.end_date).format('YYYY/MM/DD'),
               }),
            )}
            className="space-y-2"
         >
            <Controller
               name="name"
               control={control}
               defaultValue={data.name}
               render={({ field }) => (
                  <FormContainer errors={errors} label="نام ترم" name={field.name}>
                     <Input {...field} placeholder="نام ترم خود را وارد کنید . . . " />
                  </FormContainer>
               )}
            />
            <div className="w-full grid sm:grid-cols-2 gap-5">
               <Controller
                  name="start_date"
                  control={control}
                  defaultValue={data.start_date}
                  render={({ field }) => (
                     <FormContainer errors={errors} label="تاریخ شروع" name={field.name}>
                        <DatePicker
                           {...field}
                           onChange={(data) => field.onChange(new Date(data))}
                           placeholder="تاریخ شروع خود را وارد کنید . . . "
                        />
                     </FormContainer>
                  )}
               />
               <Controller
                  name="end_date"
                  control={control}
                  defaultValue={data.end_date}
                  render={({ field }) => (
                     <FormContainer errors={errors} label="تاریخ پایان" name={field.name}>
                        <DatePicker
                           {...field}
                           onChange={(data) => field.onChange(new Date(data))}
                           placeholder="تاریخ پایان خود را وارد کنید . . . "
                        />
                     </FormContainer>
                  )}
               />
            </div>

            <Button
               loading={isSubmitting}
               htmlType="submit"
               icon={<AiOutlineUserAdd size={20} />}
               className="w-fit h-auto py-2"
               type="primary"
            >
               ثبت
            </Button>
         </form>
      </>
   )
}

export default EditTermsModal
