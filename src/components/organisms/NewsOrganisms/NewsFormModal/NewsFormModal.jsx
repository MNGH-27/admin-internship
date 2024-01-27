import { useForm, Controller } from 'react-hook-form'

import { Button, Input, Upload } from '@atom/index'
import { FormContainer } from '@molecule/index'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { createNewNewsHttp } from '@core/services'
import { useMutation, useQueryClient } from 'react-query'
import toast from 'react-hot-toast'

const NewsFormModal = ({ onClose }) => {
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

   return (
      <div className="flex flex-col gap-y-5">
         <span className="text-lg font-semibold">اضافه کردن خبر</span>
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
               render={({ field }) => (
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
               )}
            />

            <Button
               loading={isSubmitting}
               htmlType="submit"
               type="primary"
               className="h-auto py-2 px-4 w-full sm:w-fit"
            >
               اضافه کردن
            </Button>
         </form>
      </div>
   )
}

export default NewsFormModal
