'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import { NavigationTitle, extractStatus, extractTitle } from './resources'

const StudentTitle = () => {
  const searchParams = useSearchParams()
  const pathName = usePathname()

  return (
    <div className="flex items-start justify-between flex-col lg:flex-row gap-y-5 w-full">
      <div className="flex flex-col items-start justify-center gap-4 mt-5">
        <div className="flex items-center gap-2">
          <span className="text-[#101114] font-semibold flex items-center justify-start gap-x-1">
            <span className="text-base md:text-lg">
              {extractTitle(pathName)}
            </span>
            <span className="text-sm text-[#8B91A7]">
              {extractStatus(searchParams.get('verified'))}
            </span>
          </span>
        </div>
        <span className="text-[#5F5F61] text-xs">
          لیست دانشجویانی که برای ثبت نام و شروع کارآموزی نیاز به تایید دارند
        </span>
      </div>
      <NavigationTitle />
    </div>
  )
}

export default StudentTitle
