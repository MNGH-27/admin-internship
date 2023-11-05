import { Button, Input, Modal, Select } from '@atom/index'
import { FormContainer } from '@molecule/index'
import { Formik } from 'formik'
import * as yup from 'yup'

import { useMutation, useQueryClient } from 'react-query'
import { AiOutlineUserAdd } from 'react-icons/ai'
import {
  createNewFacultiesHttp,
  editEducationalFacultiesHttp,
} from '@core/services'
import toast from 'react-hot-toast'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const EditFacultiesModal = ({ isShow, onClose, data }) => {
  const queryClient = useQueryClient()

  const schema = yup.object().shape({
    name: yup.string().required('مقدار نام دانشکده الزامی است'),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      ...schema.getDefault(),
    },
    resolver: yupResolver(schema),
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ name }) =>
      editEducationalFacultiesHttp({ name, id: data?.id }),
    onSuccess: () => {
      toast.success('دانشکده با موفقیت ویرایش شد')

      queryClient.invalidateQueries({ queryKey: ['faculties_list'] })

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
      toast.error('ویرایش کردن دانشکده ناموفق بود')
    },
  })

  return (
    <Modal isShow={isShow} onClose={onClose} maskClosable={false}>
      <p className="mb-5 font-semibold">
        اطلاعات مربوط به دانشکده را وارد کنید
      </p>
      <form
        onSubmit={handleSubmit((values) => mutate(values))}
        className="space-y-2"
      >
        <Controller
          name="name"
          control={control}
          defaultValue={data.name}
          render={({ field }) => (
            <FormContainer
              errors={errors}
              label="نام دانشکده"
              name={field.name}
            >
              <Input
                {...field}
                placeholder="نام دانشکده خود را وارد کنید . . . "
              />
            </FormContainer>
          )}
        />

        <Button
          loading={isLoading}
          htmlType="submit"
          icon={<AiOutlineUserAdd size={20} />}
          className="w-fit h-auto py-2"
          type="primary"
        >
          ویرایش
        </Button>
      </form>
    </Modal>
  )
}

export default EditFacultiesModal
