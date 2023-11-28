import moment from 'moment-jalaali'
import React from 'react'

const Form2StudentDescription = ({ company, student, form2, industry_supervisor }) => {
   return (
      <div className="flex flex-col mb-16 gap-5">
         <p className="text-[#5F5F61]">
            کارآموز <span className="text-black font-medium">{student.first_name + ' ' + student.last_name}</span> با
            شماره دانشجویی <span className="text-black font-medium">{student.student_number}</span> در دانشکده{' '}
            <span className="text-black font-medium">{student.faculty_name}</span> در مقطع تحصیلی کارشناسی با معرفی نامه
            شماره <span className="text-black font-medium">{form2.introduction_letter_number}</span> در مورخ{' '}
            <span className="text-black font-medium">{moment(form2.created_at).format('jYYYY/jMM/jDD')}</span> برای
            تایید فرستاده شده است،که اطلاعات بیشتر به شرح ذیل است:
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
                  {moment(form2.internship_start_date).format('jYYYY/jMM/jDD')}
               </span>
            </div>
         </div>
      </div>
   )
}

export default Form2StudentDescription
