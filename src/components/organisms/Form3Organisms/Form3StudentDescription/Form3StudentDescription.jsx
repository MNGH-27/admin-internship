import moment from 'moment-jalaali'
import React from 'react'

const Form3StudentDescription = ({ company, student, industry_supervisor }) => {
   return (
      <div className="flex flex-col mb-16 gap-5">
         <p className="text-[#5F5F61]">
            کارآموز <span className="text-black font-medium">{student?.first_name + ' ' + student?.last_name}</span> با
            شماره دانشجویی <span className="text-black font-medium">{student?.student_number}</span> در دانشکده{' '}
            <span className="text-black font-medium">{student?.faculty_name}</span> در مقطع تحصیلی کارشناسی و در شرکت{' '}
            <span className="text-black font-medium">{company.name}</span> که تاریخ شروع کارآموزی :{' '}
            <span className="text-black font-medium">
               {moment(student.internship_start_date).format('jYYYY/jMM/jDD')}
            </span>
            و تاریخ پایان کارآموزی :{' '}
            <span className="text-black font-medium">
               {moment(student.internship_finish_date).format('jYYYY/jMM/jDD')}
            </span>
            بود، برای تایید فرستاده شده است،که اطلاعات بیشتر به شرح ذیل است:
         </p>

         <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
            <div className="flex items-start justify-start gap-3">
               <span className="text-[#5F5F61]">نام شرکت:</span>
               <span className="text-[#222124] font-medium">{company.name}</span>
            </div>
            <div className="flex items-start justify-start gap-3">
               <span className="text-[#5F5F61]">نوع شرکت:</span>
               <span className="text-[#222124] font-medium">{company.type}</span>
            </div>
            <div className="flex items-start justify-start gap-3">
               <span className="text-[#5F5F61]">شماره تماس:</span>
               <span className="text-[#222124] font-medium">{company.phone_number}</span>
            </div>
            <div className="flex items-start justify-start gap-3">
               <span className="text-[#5F5F61]">کد پستی:</span>
               <span className="text-[#222124] font-medium">{company.postal_code}</span>
            </div>
            <div className="sm:col-span-2 flex items-start justify-start gap-3">
               <span className="text-[#5F5F61]">آدرس:</span>
               <span className="text-[#222124] font-medium">{company.address}</span>
            </div>
         </div>
         <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex items-start justify-start gap-3">
               <span className="text-[#5F5F61]">نام و نام خانوادگی سرپرست کارآموزی:</span>
               <span className="text-[#222124] font-medium">{industry_supervisor.full_name}</span>
            </div>
            <div className="flex items-start justify-start gap-3">
               <span className="text-[#5F5F61]">سمت: </span>
               <span className="text-[#222124] font-medium">{industry_supervisor.position}</span>
            </div>
            <div className="flex items-start justify-start gap-3">
               <span className="text-[#5F5F61]">تاریخ شروع کارآموزی:</span>
               <span className="text-[#222124] font-medium">
                  {moment(student.internship_start_date).format('jYYYY/jMM/jDD')}
               </span>
            </div>
         </div>
      </div>
   )
}

export default Form3StudentDescription
