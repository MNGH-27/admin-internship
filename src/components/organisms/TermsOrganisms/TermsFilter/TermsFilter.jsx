import { Button, Input } from '@atom/index'
import { FormContainer } from '@molecule/index'
import { Formik } from 'formik'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { CiSearch } from 'react-icons/ci'
import { GiSettingsKnobs } from 'react-icons/gi'

const TermFilter = () => {
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const { push } = useRouter()


  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    ({ search }) => {
      const params = new URLSearchParams(searchParams)

      params.set('search', search)

      //check if there is page as search params
      if (params.has('page')) {
        //in filtring data we don't nee to have pagination => remove page field of url
        params.delete('page')
      }

      return params.toString()
    },
    [searchParams],
  )

  return (
    <div className="w-full">
      <p className="mb-5 text-xl font-semibold">لیست سر ترم های کارآموزی</p>
      <div className="flex items-center justify-start text-[#5F5F61] w-full">
        <GiSettingsKnobs size={24} />
        <p>مرتب سازی براساس:</p>
      </div>
      <Formik
        initialValues={{
          search: searchParams.get('search') ?? '',
        }}
        onSubmit={(values) => {
          push(pathName + '?' + createQueryString(values))
        }}
      >
        {({ values, handleSubmit, handleChange, setFieldValue }) => (
          <form className="space-y-5 mt-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
              <FormContainer label="جستجو" name="search">
                <Input
                  name="search"
                  onChange={handleChange}
                  value={values.search}
                  placeholder="جستجو دانشجو . . ."
                />
              </FormContainer>
            </div>
            <Button
              onClick={handleSubmit}
              type="primary"
              icon={<CiSearch size={24} />}
              className="h-auto py-2 px-4 sm:w-fit w-full"
            >
              جستجو
            </Button>
          </form >
        )}
      </Formik >
    </div >
  )
}

export default TermFilter
