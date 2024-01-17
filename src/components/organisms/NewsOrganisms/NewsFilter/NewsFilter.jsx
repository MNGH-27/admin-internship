'use client'

import { Button, Input } from '@atom/index'
import { FormContainer } from '@molecule/index'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { CiSearch } from 'react-icons/ci'
import { GiSettingsKnobs } from 'react-icons/gi'

const NewsFilter = () => {
   const pathName = usePathname()
   const searchParams = useSearchParams()
   const { push } = useRouter()

   const {
      handleSubmit,
      control,
      formState: { errors },
   } = useForm({
      defaultValues: {
         faculty: searchParams.get('faculty') ?? '',
         search: searchParams.get('search') ?? '',
      },
   })

   // Get a new searchParams string by merging the current
   // searchParams with a provided key/value pair
   const createQueryString = useCallback(
      ({ faculty, search }) => {
         const params = new URLSearchParams(searchParams)

         //add new search params
         params.set('faculty', faculty)
         params.set('search', search)

         //check if there is page as search params
         if (params.has('page')) {
            //in filtering data we don't nee to have pagination => remove page field of url
            params.delete('page')
         }

         return params.toString()
      },
      [searchParams],
   )

   return (
      <div className="w-full">
         <p className="mb-5 text-xl font-semibold">لیست شرکت های کارآموزی</p>
         <div className="flex items-center justify-start text-[#5F5F61] w-full">
            <GiSettingsKnobs size={24} />
            <p>مرتب سازی براساس:</p>
         </div>

         <form
            onSubmit={handleSubmit((values) => {
               push(pathName + '?' + createQueryString(values))
            })}
            className="space-y-5 mt-5"
         >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
               <Controller
                  name="search"
                  control={control}
                  render={({ field }) => (
                     <FormContainer errors={errors} label="جستجو" name={field.name}>
                        <Input {...field} placeholder="جستجو خبر . . ." />
                     </FormContainer>
                  )}
               />
            </div>
            <Button
               htmlType="submit"
               type="primary"
               icon={<CiSearch size={24} />}
               className="h-auto py-2 px-4 w-full sm:w-fit"
            >
               جستجو
            </Button>
         </form>
      </div>
   )
}

export default NewsFilter
