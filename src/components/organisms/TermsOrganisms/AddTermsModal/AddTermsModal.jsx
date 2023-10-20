import { Button, DatePicker, Input, Modal, Select } from '@atom/index'
import { FormContainer } from '@molecule/index'
import { Formik } from 'formik'

import { masterSchema } from '@core/validation'
import { AiOutlineUserAdd } from 'react-icons/ai'

const AddTermsModal = ({ isShow, onClose }) => {
  return (
    <Modal isShow={isShow} onClose={onClose} maskClosable={false}>
      <p className="mb-5 font-semibold">
        اطلاعات مربوط به دانشکده را وارد کنید
      </p>
      <Formik
        initialValues={{ ...masterSchema.getDefault() }}
        validationSchema={masterSchema}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form method="post" className="space-y-2">
            <FormContainer label="نام ترم" name="term_name">
              <Input
                name="term_name"
                onChange={handleChange}
                value={values.term_name}
                placeholder="نام ترم خود را وارد کنید . . . "
              />
            </FormContainer>
            <div className="w-full grid sm:grid-cols-2 gap-5">
              <FormContainer label="نام ترم" name="term_name">
                <DatePicker
                  name="term_name"
                  onChange={handleChange}
                  value={values.term_name}
                  placeholder="نام ترم خود را وارد کنید . . . "
                />
              </FormContainer>
              <FormContainer label="نام ترم" name="term_name">
                <DatePicker
                  name="term_name"
                  onChange={handleChange}
                  value={values.term_name}
                  placeholder="نام ترم خود را وارد کنید . . . "
                />
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

export default AddTermsModal
