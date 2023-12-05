'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { Button, Input, Select } from '@atom/index'
import { GiSettingsKnobs } from 'react-icons/gi'
import { CiSearch } from 'react-icons/ci'

import { useQuery } from 'react-query'
import { getEntranceYearOfStudentFilter } from '@core/services'
import { FormContainer } from '@molecule/index'
import { useCallback } from 'react'
import { convertEntranceYear } from '@core/common'
import { Controller, useForm } from 'react-hook-form'

const StudentFilter = () => {
   const pathName = usePathname()
   const searchParams = useSearchParams()
   const { push } = useRouter()

   const {
      handleSubmit,
      control,
      formState: { errors },
   } = useForm({
      defaultValues: {
         entrance_year: searchParams.get('entrance_year') ?? '',
         search: searchParams.get('search') ?? '',
      },
   })

   const { data: entranceYear, isLoading: isLoadingEntranceYear } = useQuery({
      queryKey: ['student_entrance_year'],
      queryFn: getEntranceYearOfStudentFilter,
   })

   // Get a new searchParams string by merging the current
   // searchParams with a provided key/value pair
   const createQueryString = useCallback(
      ({ entrance_year, search }) => {
         const params = new URLSearchParams(searchParams)

         //add new search params
         params.set('entrance_year', entrance_year)
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
      <div className="w-full my-3">
         <div className="flex items-center justify-start text-[#5F5F61] w-full">
            <GiSettingsKnobs size={24} />
            <p>مرتب سازی براساس:</p>
         </div>
         <form
            onSubmit={handleSubmit((values) => push(pathName + '?' + createQueryString(values)))}
            className="space-y-5"
         >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-3 mt-5">
               <Controller
                  name="entrance_year"
                  control={control}
                  render={({ field }) => (
                     <FormContainer errors={errors} label="تاریخ ورود" name={field.name}>
                        <Select
                           loading={isLoadingEntranceYear}
                           selectList={[{ label: 'همه موارد', value: '' }].concat(convertEntranceYear(entranceYear))}
                           {...field}
                        />
                     </FormContainer>
                  )}
               />
               <Controller
                  name="search"
                  control={control}
                  render={({ field }) => (
                     <FormContainer errors={errors} label="جستجو" name={field.name}>
                        <Input placeholder="جستجو دانشجو . . ." {...field} />
                     </FormContainer>
                  )}
               />
            </div>
            <Button
               htmlType="submit"
               onClick={handleSubmit}
               type="primary"
               icon={<CiSearch size={24} />}
               className="h-auto py-2 px-4"
            >
               جستجو
            </Button>
         </form>
      </div>
   )
}

export default StudentFilter
