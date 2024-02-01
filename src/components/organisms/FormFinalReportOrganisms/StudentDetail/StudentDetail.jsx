import moment from 'moment-jalaali'
import React from 'react'

const StudentDetail = ({ student }) => {
   return (
      <div className="flex flex-col mb-16 gap-5">
         <p className="text-[#5F5F61]">
            کارآموز <span className="text-black font-medium">{student?.first_name + ' ' + student?.last_name}</span> با
            شماره دانشجویی <span className="text-black font-medium">{student?.student_number}</span> در دانشکده{' '}
            <span className="text-black font-medium">{student?.faculty_name}</span> در مقطع تحصیلی کارشناسی و در شرکت{' '}
            <span className="text-black font-medium">
               {moment(student.internship_start_date).format('jYYYY/jMM/jDD')}
            </span>
            و تاریخ پایان کارآموزی :{' '}
            <span className="text-black font-medium">
               {moment(student.internship_finish_date).format('jYYYY/jMM/jDD')}
            </span>
            بود، برای تایید فرستاده شده است.
         </p>
      </div>
   )
}

export default StudentDetail
