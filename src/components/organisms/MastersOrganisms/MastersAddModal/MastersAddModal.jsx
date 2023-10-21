import { QueryClient, useMutation, useQuery } from 'react-query'

import { Button, Input, Modal, Select } from '@atom/index'
import { FormContainer } from '@molecule/index'

import { createNewMasterHttp, getfacultyListHttp } from '@core/services'
import { convertFacultyList } from '@core/common'
import { masterSchema } from '@core/validation'

import { Formik } from 'formik'

import toast from 'react-hot-toast'

import { AiOutlineUserAdd } from 'react-icons/ai'

const MastersAddModal = ({ isShow, onClose }) => {
  const queryClient = new QueryClient()

  const { mutate, isLoading: isSubmiting } = useMutation({
    mutationKey: ['create_new_master'],
    mutationFn: (data) => createNewMasterHttp(data),
    onSuccess: (response) => {
      //revalidate data of master_list
      queryClient.invalidateQueries(['master_list'])
      //show that master added successfully
      toast.success('استاد با موفقیت اضافه شد')
      //close modal
      onClose()
    },
    onError: (error) => {
      toast.error('اضافه کردن استاد ناموفق بود')
    },
  })

  const { data: facultyList, isLoading: isLoadingFaculty } = useQuery({
    queryKey: ['faculty_list'],
    queryFn: getfacultyListHttp,
  })

  return (
    <Modal isShow={isShow} onClose={onClose} maskClosable={false}>
      <p className="mb-5 font-semibold">اطلاعات مربوط به استاد را وارد کنید</p>
      <Formik
        initialValues={{ ...masterSchema.getDefault() }}
        validationSchema={masterSchema}
        onSubmit={(data) => mutate(data)}
      >
        {({ values, handleSubmit, handleChange, setFieldValue }) => (
          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex flex-col gap-y-3 w-full"
          >
            <div className="grid grid-cols-2 gap-5">
              <FormContainer label="نام" name="first_name">
                <Input
                  name="first_name"
                  onChange={handleChange}
                  value={values.first_name}
                  placeholder="نام خود را وارد کنید . . . "
                />
              </FormContainer>
              <FormContainer label="نام خانوادگی" name="last_name">
                <Input
                  name="last_name"
                  onChange={handleChange}
                  value={values.last_name}
                  placeholder="نام خانوادگی خود را وارد کنید . . ."
                />
              </FormContainer>
              <FormContainer label="ایمیل" name="email">
                <Input
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="ایمیل خود را وارد کنید . . ."
                />
              </FormContainer>
              <FormContainer label="کد ملی" name="national_code">
                <Input
                  name="national_code"
                  onChange={handleChange}
                  value={values.national_code}
                  placeholder="کدملی خود را وارد کنید . . ."
                />
              </FormContainer>
              <FormContainer label="شماره تلفن" name="phone_number">
                <Input
                  name="phone_number"
                  onChange={handleChange}
                  value={values.phone_number}
                  placeholder="شماره تلفن خود را وارد کنید . . ."
                />
              </FormContainer>
              <FormContainer label="کدپرسنلی" name="personal_code">
                <Input
                  name="personal_code"
                  onChange={handleChange}
                  value={values.personal_code}
                  placeholder="کدپرسنلی خود را وارد کنید . . ."
                />
              </FormContainer>

              <FormContainer label="دانشکده" name="faculty_id">
                <Select
                  value={values.faculty_id}
                  onChange={(value) => setFieldValue('faculty_id', value)}
                  loading={isLoadingFaculty}
                  selectList={convertFacultyList(facultyList?.data)}
                />
              </FormContainer>
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
        )}
      </Formik>
    </Modal>
  )
}

export default MastersAddModal
