'use client'

import { CompanyTable, CompanyFilter } from '@organisms/CompanyOrganisms'
import { AiOutlineUserAdd } from 'react-icons/ai'
import Link from 'next/link'

const CompanyTemplate = () => {
  return (
    <>
      <div className="flex items-end justify-between mb-5">
        <CompanyFilter />

        <Link
          href={'/dashboard/company/new-company'}
          className="flex items-center justify-center gap-x-2 whitespace-nowrap bg-[#003B7E] text-white p-2 rounded-md"
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
