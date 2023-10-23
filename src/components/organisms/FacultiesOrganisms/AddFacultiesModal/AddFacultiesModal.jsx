import { Button, Input, Modal, Select } from '@atom/index'
import { FormContainer } from '@molecule/index'
import { Formik } from 'formik'
import * as yup from 'yup'

import { useMutation, useQueryClient } from 'react-query'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { createNewFacultiesHttp } from '@core/services'
import toast from 'react-hot-toast'

const AddFacultiesModal = ({ isShow, onClose }) => {
  const queryClient = useQueryClient()

  const schema = yup.object().shape({
    name: yup.string().required("مقدار نام دانشکده الزامی است")
  })

  const { mutate, isLoading } = useMutation({
    mutationKey: ['create_faculty'],
    mutationFn: (data) => createNewFacultiesHttp(data),
    onSuccess: (response) => {
      toast.success("دانشکده با موفقیت اضافه شد")

      queryClient.invalidateQueries(['faculties_list'])

      onClose()
    },
    onError: (error) => {
      toast.error("اضافه کردن دانشکده با مشکل مواجه شد")
    }
  })

  return (
    <Modal isShow={isShow} onClose={onClose} maskClosable={false}>
      <p className="mb-5 font-semibold">
        اطلاعات مربوط به دانشکده را وارد کنید
      </p>
      <Formik
        initialValues={{ ...schema.getDefault() }}
        validationSchema={schema}
        onSubmit={(values) => mutate(values)}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form method="post" onSubmit={handleSubmit} className="space-y-2">
            <FormContainer label="نام دانشکده" name="name">
              <Input
                name="name"
                onChange={handleChange}
                value={values.name}
                placeholder="نام دانشکده خود را وارد کنید . . . "
              />
            </FormContainer>

            <Button
              loading={isLoading}
              htmlType='submit'
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

export default AddFacultiesModal
