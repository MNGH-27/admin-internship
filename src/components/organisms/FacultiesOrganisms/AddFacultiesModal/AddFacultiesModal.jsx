import { Button, Input, Modal, Select } from '@atom/index'
import { FromContainer } from '@molecule/index'
import { Formik } from 'formik'

import { masterSchema } from '@core/validation'
import { AiOutlineUserAdd } from 'react-icons/ai'

const AddFacultiesModal = ({ isShow, onClose }) => {
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
            <FromContainer label="نام دانشکده" name="company_name">
              <Input
                name="company_name"
                onChange={handleChange}
                value={values.company_name}
                placeholder="نام دانشکده خود را وارد کنید . . . "
              />
            </FromContainer>

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

export default AddFacultiesModal
