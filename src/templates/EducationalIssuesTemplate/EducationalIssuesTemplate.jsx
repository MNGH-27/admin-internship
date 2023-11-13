import Link from 'next/link'

const EducationalIssuesTemplate = () => {
   return (
      <div className="flex flex-col">
         <h2 className="text-[#101114] text-2xl font-semibold mb-5 text-center md:text-right">مسائل اموزشی</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Link
               href={'/dashboard/educational-issues/faculties'}
               className="px-6 py-5 flex flex-col items-center md:items-start justify-center gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all"
            >
               <span className="text-[#101114] font-semibold text-xl mb-2">دانشکده ها</span>
               <div className="font-semibold text-sm space-y-2 text-gray-400">
                  مشاهده ی لیست دانشکده ها ، اضافه کردن دانشکده ، ویرایش و حذف دانشکده
               </div>
            </Link>
            <Link
               href={'/dashboard/educational-issues/terms'}
               className="flex flex-col items-center md:items-start justify-center gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all"
            >
               <span className="text-[#101114] font-semibold text-xl mb-2">سر ترم</span>
               <div className="font-semibold text-sm space-y-2 text-gray-400">مشاهده سرترم ها ، اضافه کردن سر ترم</div>
            </Link>
            <Link
               href={'/dashboard/educational-issues/terms-detail'}
               className="flex flex-col items-center md:items-start justify-center gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all"
            >
               <span className="text-[#101114] font-semibold text-xl mb-2">اطلاعات ترم</span>
               <div className="font-semibold text-sm space-y-2 text-gray-400">
                  مشاهده ی اطلاعات مربوط به هر ترم همراه با جزئیات
               </div>
            </Link>
         </div>
      </div>
   )
}

export default EducationalIssuesTemplate
