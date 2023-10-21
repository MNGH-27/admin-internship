'use client'

import { useMutation, useQuery, useQueryClient } from 'react-query'

import { Button, Input, Modal, Select, Spinner } from '@atom/index'
import { masterSchema } from '@core/validation'
import { FormContainer } from '@molecule/index'
import { Formik } from 'formik'
import { AiFillEdit } from 'react-icons/ai'
import { editMasterHttp, getSingleMasterEditHttp, getfacultyListHttp } from '@core/services'
import { convertFacultyList } from '@core/common'
import toast from 'react-hot-toast'

const EditMasterModal = ({ isShow, onClose, data }) => {
  const queryClient = new useQueryClient()

  const { mutate, isLoading: isSubmiting } = useMutation({
    mutationKey: ['edit_master'],
    mutationFn: (data) => editMasterHttp({ ...data, id: data.id }),
    onSuccess: (response) => {
      //revalidate data of master_list
      queryClient.invalidateQueries('master_list')
      //show that master added successfully
      toast.success('استاد با موفقیت ویرایش شد')
      //close modal
      onClose()
    },
    onError: (error) => {
      toast.error('ویرایش استاد ناموفق بود')
    },
  })


  const { data: singleMaster, isLoading: isSingleMasterLoading } = useQuery({
    queryKey: [`single_master_${data?.id}`],
    queryFn: () => getSingleMasterEditHttp({ id: data.id }),
    cacheTime: 0,
    staleTime: 0,
    enabled: !!data?.id,
  })

  const { data: facultyList, isLoading: isLoadingFaculty } = useQuery({
    queryKey: ['faculty_list'],
    queryFn: getfacultyListHttp,
  })

  return (
    <Modal isShow={isShow} onClose={onClose}>
      {isSingleMasterLoading ? (
        <div className="flex items-center justify-center w-full my-5">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col items-start justify-center gap-3">
          <span className="text-[#222124] text-xl font-semibold">
            ویرایش استاد
          </span>
          <Formik
            initialValues={{ ...singleMaster?.data, faculty_id: singleMaster?.data?.faculty.id }}
            validationSchema={masterSchema}
            onSubmit={(values) => mutate(values)}
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
                  icon={<AiFillEdit size={20} />}
                  className="w-fit h-auto py-2"
                  type="primary"
                >
                  ثبت
                </Button>
              </form>
            )}
          </Formik>
        </div>
      )}
    </Modal>
  )
}

export default EditMasterModal
