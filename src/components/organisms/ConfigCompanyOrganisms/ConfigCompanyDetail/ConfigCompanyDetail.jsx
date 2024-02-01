import { Controller } from 'react-hook-form'

import { Button, Image, Input, Select, Upload } from '@atom/index'
import { FormContainer } from '@molecule/index'

import { TbListDetails } from 'react-icons/tb'
import { DUMMY_COMPANY_TYPE } from './resources'

const ConfigCompanyDetail = ({ defaultValues, control, errors }) => {
   console.log('defaultValues : ', defaultValues)

   return (
      <div className="mb-4">
         <div className="text-xl font-semibold flex items-center justify-start gap-x-2 mb-2">
            <TbListDetails size={24} />
            <span>اطلاعات شرکت</span>
         </div>
         <div className="grid sm:grid-cols-2 gap-y-6 sm:gap-y-10 sm:gap-x-10">
            <Controller
               name="company_name"
               control={control}
               defaultValue={defaultValues?.company_name ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="نام شرکت" name={field.name}>
                     <Input {...field} />
                  </FormContainer>
               )}
            />
            <Controller
               name="company_phone"
               control={control}
               defaultValue={defaultValues?.company_phone ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="تلفن شرکت" name={field.name}>
                     <Input {...field} />
                  </FormContainer>
               )}
            />
            <Controller
               name="company_number"
               control={control}
               defaultValue={defaultValues?.company_number ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="شماره ثبت شرکت" name={field.name}>
                     <Input {...field} />
                  </FormContainer>
               )}
            />

            <Controller
               name="company_registry_code"
               control={control}
               defaultValue={defaultValues?.company_registry ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="شماره شناسه شرکت" name={field.name}>
                     <Input {...field} />
                  </FormContainer>
               )}
            />

            <Controller
               name="company_postal_code"
               control={control}
               defaultValue={defaultValues?.company_postal_code ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="کد پستی" name={field.name}>
                     <Input {...field} />
                  </FormContainer>
               )}
            />
            <Controller
               name="company_category"
               control={control}
               defaultValue={defaultValues?.company_category ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="نوع شرکت" name={field.name}>
                     <Input {...field} />
                  </FormContainer>
               )}
            />
            <Controller
               name="company_type"
               control={control}
               defaultValue={defaultValues?.company_type ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="نوع شرکت" name={field.name}>
                     <Select selectList={DUMMY_COMPANY_TYPE} placeholder={'نوع شرکت خود را انتخاب کنید'} {...field} />
                  </FormContainer>
               )}
            />
            <Controller
               name="image"
               control={control}
               defaultValue={defaultValues?.image ?? null}
               render={({ field }) => {
                  if (!field?.value?.uid && field?.value !== null) {
                     return (
                        <FormContainer errors={errors} label="لوگو شرکت" name={field.name}>
                           <div className="flex items-center justify-start gap-5 border rounded-md w-fit p-2">
                              <Image
                                 className="rounded-sm"
                                 width={100}
                                 height={100}
                                 src={field?.value ?? ''}
                                 alt="news banner"
                              />

                              <Button
                                 htmlType="button"
                                 onClick={() => field.onChange(null)}
                                 type="primary"
                                 className="bg-red-700 hover:!bg-red-900 h-auto"
                              >
                                 حذف
                              </Button>
                           </div>
                        </FormContainer>
                     )
                  }
                  return (
                     <FormContainer errors={errors} label="لوگو شرکت" name={field.name}>
                        <Upload {...field} onChange={(value) => field.onChange(value.file)} />
                     </FormContainer>
                  )
               }}
            />
            <Controller
               name="verified"
               control={control}
               defaultValue={defaultValues?.verified ?? ''}
               render={({ field }) => (
                  <FormContainer errors={errors} label="وضعیت شرکت" name={field.name}>
                     <Select
                        selectList={[
                           {
                              label: 'تایید شده',
                              value: 0,
                           },
                           {
                              label: 'رد شده',
                              value: 1,
                           },
                        ]}
                        placeholder={'وضعیت شرکت خود را انتخاب کنید'}
                        {...field}
                     />
                  </FormContainer>
               )}
            />

            <Controller
               name="company_address"
               control={control}
               defaultValue={defaultValues?.company_address ?? ''}
               render={({ field }) => (
                  <FormContainer className="col-span-full" errors={errors} label="آدرس شرکت" name={field.name}>
                     <Input type="textArea" {...field} />
                  </FormContainer>
               )}
            />
         </div>
      </div>
   )
}

export default ConfigCompanyDetail
