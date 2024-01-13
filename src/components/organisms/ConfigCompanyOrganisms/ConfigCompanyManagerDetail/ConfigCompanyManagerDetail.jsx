import { useQuery } from 'react-query'
import { Controller } from 'react-hook-form'

import { Input, Select } from '@atom/index'
import { convertFacultyList } from '@core/common'
import { getfacultyListHttp } from '@core/services'
import { FormContainer } from '@molecule/index'

import { TbListDetails } from 'react-icons/tb'

const ConfigCompanyManagerDetail = ({ defaultValues, control, errors }) => {
   const { data: facultyList, isLoading: isLoadingFaculty } = useQuery({
      queryKey: ['faculty_list'],
      queryFn: getfacultyListHttp,
   })

   return (
      <div className="mb-4">
         <div className="text-xl font-semibold flex items-center justify-start gap-x-2 mb-2">
            <TbListDetails size={24} />
            <span>اطلاعات سرپرست شرکت</span>
         </div>
         <div className="grid grid-cols-2 gap-y-6 sm:gap-y-10 sm:gap-x-10">
            <Controller
               name="first_name"
               control={control}
               defaultValue={defaultValues?.first_name ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="نام سرپرست" name={field.name}>
                     <Input {...field} />
                  </FormContainer>
               )}
            />
            <Controller
               name="last_name"
               control={control}
               defaultValue={defaultValues?.last_name ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="نام خانوادگی سرپرست" name={field.name}>
                     <Input {...field} />
                  </FormContainer>
               )}
            />
            <Controller
               name="email"
               control={control}
               defaultValue={defaultValues?.email ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="ایمیل سرپرست" name={field.name}>
                     <Input {...field} />
                  </FormContainer>
               )}
            />
            <Controller
               name="national_code"
               control={control}
               defaultValue={defaultValues?.national_code ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="کدملی سرپرست" name={field.name}>
                     <Input {...field} />
                  </FormContainer>
               )}
            />

            <Controller
               name="username"
               control={control}
               defaultValue={defaultValues?.username ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="نام کاربری سرپرست" name={field.name}>
                     <Input {...field} />
                  </FormContainer>
               )}
            />

            <Controller
               name="phone_number"
               control={control}
               defaultValue={defaultValues?.phone_number ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="تلفن سرپرست" name={field.name}>
                     <Input {...field} />
                  </FormContainer>
               )}
            />

            <Controller
               name="faculty_id"
               control={control}
               defaultValue={defaultValues?.faculty_id ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="دانشکده" name={field.name}>
                     <Select loading={isLoadingFaculty} selectList={convertFacultyList(facultyList?.data)} {...field} />
                  </FormContainer>
               )}
            />
         </div>
      </div>
   )
}

export default ConfigCompanyManagerDetail
