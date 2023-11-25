import { Button } from '@atom/index'
import { Form2AttendanceTable, Form2PerformanceTable } from '@organisms/Form2Organisms'
import Link from 'next/link'
import { IoCloudDownloadOutline, IoPersonRemove, IoReturnDownBack } from 'react-icons/io5'

const Form2Template = () => {
   return (
      <div>
         <div className="flex flex-col items-center justify-center">
            <Link
               type="primary"
               className="ml-auto flex items-center justify-start gap-x-2 py-2 px-4 rounded-md bg-[#003B7E] text-white w-fit"
               href={'/dashboard/company'}
            >
               <IoReturnDownBack size={20} />
               بازگشت
            </Link>
            <div className="w-full flex flex-col items-start justify-center gap-7 mb-16 mt-7">
               <span className="flex items-center font-semibold gap-2 text-red-700 text-sm">
                  <IoPersonRemove size={20} />
                  دانشجو در وضعیت رد شده قرار دارد
               </span>
               <div className="flex items-start sm:items-center justify-start flex-col sm:flex-row w-full gap-2">
                  <span className="text-[#101114] text-xl font-semibold">asd</span>
                  <Button type="primary" className="rounded-full gap-x-2">
                     <IoCloudDownloadOutline />
                     دانلود فرم
                  </Button>
               </div>
            </div>
         </div>

         <div className="flex flex-col mb-16 gap-5">
            <p className="text-[#5F5F61]">
               کارآموز <span className="text-black font-medium">نام کارآموز تستی</span> با شماره دانشجویی{' '}
               <span className="text-black font-medium">شماره دانشجو</span> در دانشکده{' '}
               <span className="text-black font-medium">دانشکده</span> در مقطع تحصیلی کارشناسی با معرفی نامه شماره{' '}
               <span className="text-black font-medium">شماره معرفی نامه</span> در مورخ{' '}
               <span className="text-black font-medium">تاریخ شروع کارآموزی</span> برای تایید فرستاده شده است،که اطلاعات
               بیشتر به شرح ذیل است:
            </p>
            <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
               <div className="flex items-start justify-start gap-3">
                  <span className="text-[#5F5F61]">نام شرکت:</span>
                  <span className="text-[#222124] font-medium">نام شرکت</span>
               </div>
               <div className="flex items-start justify-start gap-3">
                  <span className="text-[#5F5F61]">نوع شرکت:</span>
                  <span className="text-[#222124] font-medium">نوع شرکت</span>
               </div>
               <div className="flex items-start justify-start gap-3">
                  <span className="text-[#5F5F61]">شماره تماس:</span>
                  <span className="text-[#222124] font-medium">شماره تماس شرکت</span>
               </div>
               <div className="flex items-start justify-start gap-3">
                  <span className="text-[#5F5F61]">کد پستی:</span>
                  <span className="text-[#222124] font-medium">کد پستی شرکت</span>
               </div>
               <div className="sm:col-span-2 flex items-start justify-start gap-3">
                  <span className="text-[#5F5F61]">آدرس:</span>
                  <span className="text-[#222124] font-medium">آدرس شرکت</span>
               </div>
            </div>
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5">
               <div className="flex items-start justify-start gap-3">
                  <span className="text-[#5F5F61]">نام و نام خانوادگی سرپرست کارآموزی:</span>
                  <span className="text-[#222124] font-medium">نام سرپرست</span>
               </div>
               <div className="flex items-start justify-start gap-3">
                  <span className="text-[#5F5F61]">سمت: </span>
                  <span className="text-[#222124] font-medium">سمات سرپرست</span>
               </div>
               <div className="flex items-start justify-start gap-3">
                  <span className="text-[#5F5F61]">تاریخ شروع کارآموزی:</span>
                  <span className="text-[#222124] font-medium">تاریخ شروع کارآموزی</span>
               </div>
            </div>
         </div>

         <Form2AttendanceTable />

         <Form2PerformanceTable />

         <div className="flex flex-col sm:flex-row items-center justify-end gap-5 w-full mb-10">
            {/* <button
               onClick={() => {
                  if (data.form2.rejection_reason) {
                     setRejectModal({
                        isShow: true,
                        isBtnLoading: false,
                        hasDesc: true,
                        desc: data.form2.rejection_reason,
                     })
                  } else {
                     setRejectModal({
                        isShow: true,
                        isBtnLoading: false,
                     })
                  }
               }}
               className="px-6 py-3 rounded-lg bg-[#FCEAEA] hover:bg-[#E73F3F] text-[#E73F3F] hover:text-[#FCEAEA] border-2 border-[#FCEAEA] duration-200"
            >
               {data.status?.toString() === '3' ? 'مشاهده دلیل رد' : 'رد فرم شماره 2'}
            </button>
            {data.status?.toString() === '2' ? (
               <span className="text-green-700 font-medium">دانشجو در وضعیت تایید شده قرار دارد</span>
            ) : (
               <LoadingButton
                  isLoading={verifyBtnLoading}
                  onClickHandler={asyncVerifyStudentForm2}
                  mainBgColor="#EBF1FD"
                  hoverBgColor="#2080F6"
                  paddingClass="px-6 py-3"
               >
                  تایید فرم شماره 2
               </LoadingButton>
            )} */}
         </div>
      </div>
   )
}

export default Form2Template
