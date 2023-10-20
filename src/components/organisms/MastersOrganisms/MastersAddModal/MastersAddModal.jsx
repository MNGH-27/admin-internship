import { Button, Input, Modal, Select } from '@atom/index'
import { FormContainer } from '@molecule/index'
import { Formik } from 'formik'

import { masterSchema } from '@core/validation'
import { AiOutlineUserAdd } from 'react-icons/ai'

const MastersAddModal = ({ isShow, onClose }) => {
  return (
    <Modal isShow={isShow} onClose={onClose} maskClosable={false}>
      <p className="mb-5 font-semibold">اطلاعات مربوط به استاد را وارد کنید</p>
      <Formik
        initialValues={{ ...masterSchema.getDefault() }}
        validationSchema={masterSchema}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form method="post" className="flex flex-col gap-y-3 w-full">
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

              <FormContainer label="دانشکده" name="faculty">
                <Select />
              </FormContainer>
            </div>
            <Button
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
