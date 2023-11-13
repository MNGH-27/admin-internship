'use client'

import { CompanyTable, CompanyFilter } from '@organisms/CompanyOrganisms'
import { AiOutlineUserAdd } from 'react-icons/ai'
import Link from 'next/link'

const CompanyTemplate = () => {
   return (
      <>
         <div className="flex flex-col sm:flex-row items-end space-y-3 mb-5">
            <CompanyFilter />

            <Link
               href={'/dashboard/company/new-company'}
               className="w-full sm:w-fit flex items-center justify-center gap-x-2 whitespace-nowrap bg-[#003B7E] text-white py-2 px-4 rounded-md"
            >
               <AiOutlineUserAdd size={20} />
               اضافه کردن شرکت
            </Link>
         </div>

         <CompanyTable />
      </>
   )
}

export default CompanyTemplate
