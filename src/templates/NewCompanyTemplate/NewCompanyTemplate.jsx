'use client'

import { Formik } from 'formik'

import { Button } from '@atom/index'

import { IoReturnDownBack } from 'react-icons/io5'

import {
  ConfigCompanyDetail,
  ConfigCompanyManagerDetail,
} from '@organisms/ConfigCompanyOrganisms'

import { configCompanySchema } from '@core/validation/configCompanySchema'

import { AiOutlineUserAdd } from 'react-icons/ai'
import Link from 'next/link'

const NewCompanyTemplate = () => {
  return (
    <div>
      <Link
        type="primary"
        className="flex items-center justify-start gap-x-2 py-2 px-4 rounded-md bg-[#003B7E] text-white w-fit"
        href={'/dashboard/company'}
      >
        <IoReturnDownBack size={20} />
        بازگشت
      </Link>
      <div className="flex flex-col items-start w-full gap-1 my-4">
        <span className="text-2xl font-semibold">اضافه کردن شرکت جدید</span>
        <span className="text-sm font-medium text-gray-400">
          برای اضافه کردن اطلاعات مورد هر نیاز هر شرکت را وارد کنید{' '}
        </span>
      </div>
      <Formik
        initialValues={{ ...configCompanySchema.getDefault() }}
        validationSchema={configCompanySchema}
        // onSubmit={(values) => {
        //   mutate(values)
        // }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <ConfigCompanyDetail values={values} handleChange={handleChange} />

            <ConfigCompanyManagerDetail
              values={values}
              handleChange={handleChange}
            />

            <Button
              icon={<AiOutlineUserAdd size={24} />}
              htmlType="submit"
              className="h-auto py-3 px-6 ml-auto text-base"
              type="primary"
            >
              اضافه کردن شرکت
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default NewCompanyTemplate
