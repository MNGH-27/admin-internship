import { useForm, Controller } from 'react-hook-form'

import { Button, Image, Input, Upload } from '@atom/index'
import { FormContainer } from '@molecule/index'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { createNewNewsHttp, deleteNewsImageHttp } from '@core/services'
import { useMutation, useQueryClient } from 'react-query'
import toast from 'react-hot-toast'

const EditNewsModal = ({ data, onClose }) => {
   const queryClient = useQueryClient()

   const schema = yup.object().shape({
      title: yup.string().required('مقدار عنوان الزامی است'),
      body: yup.string().required('مقدار متن الزامی است'),
      image: yup.mixed().required('مقدار بنر الزامی است'),
   })

   const {
      handleSubmit,
      control,
      formState: { errors },
      setError,
   } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
         ...data,
      },
   })

   const { mutate, isLoading: isSubmitting } = useMutation({
      mutationFn: (values) => createNewNewsHttp(values),
      onSuccess: () => {
         //revalidate data of news_list
         queryClient.invalidateQueries({ queryKey: ['news_list'] })
         //show that master added successfully
         toast.success('خبر با موفقیت اضافه شد')
         //close modal
         onClose()
      },
      onError: (error) => {
         if (error.message) {
            toast.error(error.message)
         } else {
            for (const errorKey in error.error) {
               setError(errorKey, { message: error.error[errorKey] })
            }
         }
         return
      },
   })

   const { mutate: removeNewsBanner, isLoading: isRemovingNewsBanner } = useMutation({
      mutationFn: deleteNewsImageHttp,
      onSuccess: () => {
         //show that master added successfully
         toast.success('تصویر با موفقیت حذف شد')
      },
      onError: (error) => {
         if (error.message) {
            toast.error(error.message)
         } else {
            for (const errorKey in error.error) {
               setError(errorKey, { message: error.error[errorKey] })
            }
         }
         return
      },
   })

   return (
      <div className="flex flex-col gap-y-5">
         <span className="text-lg font-semibold">ویرایش کردن خبر</span>
         <form className="flex flex-col gap-y-2 p-2" onSubmit={handleSubmit(mutate)}>
            <Controller
               name="title"
               control={control}
               render={({ field }) => (
                  <FormContainer errors={errors} label="عنوان" name={field.name}>
                     <Input {...field} />
                  </FormContainer>
               )}
            />

            <Controller
               name="body"
               control={control}
               render={({ field }) => (
                  <FormContainer errors={errors} label="متن" name={field.name}>
                     <Input type="textArea" {...field} />
                  </FormContainer>
               )}
            />

            <Controller
               name="image"
               control={control}
               render={({ field }) => {
                  if (!field.value.uid) {
                     return (
                        <div className="flex flex-col items-start justify-start gap-y-2">
                           <span>بنر خبر</span>
                           <div className="flex items-center justify-start gap-5 border rounded-md w-fit p-2">
                              <Image
                                 className="rounded-sm"
                                 width={100}
                                 height={100}
                                 src={field.value}
                                 alt="news banner"
                              />

                              <Button
                                 loading={isRemovingNewsBanner}
                                 htmlType="button"
                                 onClick={() => removeNewsBanner({ id: data.id })}
                                 type="primary"
                                 className="bg-red-700 hover:!bg-red-900 h-auto"
                              >
                                 حذف
                              </Button>
                           </div>
                        </div>
                     )
                  }
                  return (
                     <FormContainer errors={errors} label="بنر خبر" name={field.name}>
                        <Upload
                           {...field}
                           onChange={(value) => {
                              if (value.fileList.length > 0) {
                                 field.onChange(value.file)
                              } else {
                                 field.onChange()
                              }
                           }}
                        />
                     </FormContainer>
                  )
               }}
            />

            <Button
               loading={isSubmitting}
               htmlType="submit"
               type="primary"
               className="h-auto py-2 px-4 w-full sm:w-fit"
            >
               ویرایش
            </Button>
         </form>
      </div>
   )
}

export default EditNewsModal
