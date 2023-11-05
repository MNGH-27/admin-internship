import { useMutation, useQuery, useQueryClient } from 'react-query'

import { Button, Input, Modal, Select } from '@atom/index'
import { FormContainer } from '@molecule/index'

import { createNewMasterHttp, getfacultyListHttp } from '@core/services'
import { convertFacultyList } from '@core/common'
import { masterSchema } from '@core/validation'

import toast from 'react-hot-toast'

import { AiOutlineUserAdd } from 'react-icons/ai'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const MastersAddModal = ({ isShow, onClose }) => {
  const queryClient = useQueryClient()

  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      ...masterSchema.getDefault(),
    },
    resolver: yupResolver(masterSchema),
  })

  const { mutate, isLoading: isSubmiting } = useMutation({
    mutationFn: (data) => createNewMasterHttp(data),
    onSuccess: () => {
      //revalidate data of master_list
      queryClient.invalidateQueries({ queryKey: ['master_list'] })
      //show that master added successfully
      toast.success('استاد با موفقیت اضافه شد')
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
      toast.error('اضافه کردن استاد نا موفق بود')
    },
  })

  const { data: facultyList, isLoading: isLoadingFaculty } = useQuery({
    queryKey: ['faculty_list'],
    queryFn: getfacultyListHttp,
  })

  return (
    <Modal isShow={isShow} onClose={onClose} maskClosable={false}>
      <p className="mb-5 font-semibold">اطلاعات مربوط به استاد را وارد کنید</p>
      <form
        onSubmit={handleSubmit((values) => mutate(values))}
        className="flex flex-col gap-y-3 w-full"
      >
        <div className="grid grid-cols-2 gap-5">
          <Controller
            name="first_name"
            control={control}
            render={({ field }) => (
              <FormContainer errors={errors} label="نام" name={field.name}>
                <Input {...field} placeholder="نام خود را وارد کنید . . . " />
              </FormContainer>
            )}
          />

          <Controller
            name="last_name"
            control={control}
            render={({ field }) => (
              <FormContainer
                errors={errors}
                label="نام خانوادگی"
                name={field.name}
              >
                <Input
                  {...field}
                  placeholder="نام خانوادگی خود را وارد کنید . . ."
                />
              </FormContainer>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <FormContainer errors={errors} label="ایمیل" name={field.name}>
                <Input {...field} placeholder="ایمیل خود را وارد کنید . . ." />
              </FormContainer>
            )}
          />
          <Controller
            name="national_code"
            control={control}
            render={({ field }) => (
              <FormContainer errors={errors} label="کد ملی" name={field.name}>
                <Input {...field} placeholder="کدملی خود را وارد کنید . . ." />
              </FormContainer>
            )}
          />
          <Controller
            name="phone_number"
            control={control}
            render={({ field }) => (
              <FormContainer
                errors={errors}
                label="شماره تلفن"
                name={field.name}
              >
                <Input
                  {...field}
                  placeholder="شماره تلفن خود را وارد کنید . . ."
                />
              </FormContainer>
            )}
          />
          <Controller
            name="personal_code"
            control={control}
            render={({ field }) => (
              <FormContainer errors={errors} label="کدپرسنلی" name={field.name}>
                <Input
                  {...field}
                  placeholder="کدپرسنلی خود را وارد کنید . . ."
                />
              </FormContainer>
            )}
          />
          <Controller
            name="faculty_id"
            control={control}
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
          icon={<AiOutlineUserAdd size={20} />}
          className="w-fit h-auto py-2"
          type="primary"
        >
          ثبت
        </Button>
      </form>
    </Modal>
  )
}

export default MastersAddModal
