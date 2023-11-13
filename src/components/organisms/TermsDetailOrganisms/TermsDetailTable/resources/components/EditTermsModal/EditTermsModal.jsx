import { Button, Input, Modal, DatePicker } from '@atom/index'
import { Formik } from 'formik'
import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { educationalTermsSchema } from '@core/validation'
import { FormContainer } from '@molecule/index'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { editEducationalTermsHttp } from '@core/services'
import moment from 'moment-jalaali'

const EditTermsModal = ({ isShow, onClose, data }) => {
   const queryClient = useQueryClient()

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
            toast.error(error.message)
         } else {
            toast.error('ویرایش کردن سر ترم ناموفق بود')
         }
      },
   })

   return (
      <Modal isShow={isShow} onClose={onClose} maskClosable={false}>
         <p className="mb-5 font-semibold">اطلاعات مربوط به ترم را وارد کنید</p>
         <Formik
            initialValues={{ ...data }}
            validationSchema={educationalTermsSchema}
            onSubmit={(values) =>
               mutate({
                  ...values,
                  start_date: moment(values.start_date).format('YYYY/MM/DD'),
                  end_date: moment(values.end_date).format('YYYY/MM/DD'),
               })
            }
         >
            {({ values, handleSubmit, handleChange, setFieldValue }) => (
               <form onSubmit={handleSubmit} method="post" className="space-y-2">
                  <FormContainer label="نام ترم" name="name">
                     <Input
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                        placeholder="نام ترم خود را وارد کنید . . . "
                     />
                  </FormContainer>
                  <div className="w-full grid sm:grid-cols-2 gap-5">
                     <FormContainer label="تاریخ شروع" name="start_date">
                        <DatePicker
                           name="start_date"
                           onChange={(data) => setFieldValue('start_date', new Date(data))}
                           value={values.start_date}
                           placeholder="تاریخ شروع خود را وارد کنید . . . "
                        />
                     </FormContainer>
                     <FormContainer label="تاریخ پایان" name="end_date">
                        <DatePicker
                           name="end_date"
                           onChange={(data) => setFieldValue('end_date', new Date(data))}
                           value={values.end_date}
                           placeholder="تاریخ پایان خود را وارد کنید . . . "
                        />
                     </FormContainer>
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
            )}
         </Formik>
      </Modal>
   )
}

export default EditTermsModal
