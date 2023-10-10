'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'

import { extractStatus, extractTitle } from './resources'

import { IoReturnDownBack } from 'react-icons/io5'
import { GoStop } from 'react-icons/go'
import { Button } from '@atom/index'
import { useCallback } from 'react'
import { PiNoteLight } from 'react-icons/pi'

const StudentTitle = () => {
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const pathName = usePathname()

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

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
          <span
            className={` text-center duration-200 relative bottom-5 text-[#2080F6] text-[10px] font-semibold px-2 py-1 rounded-xl bg-[#EBF1FD]`}
          >
            12 دانشجو
          </span>
        </div>
        <span className="text-[#5F5F61] text-xs">
          لیست دانشجویانی که برای ثبت نام و شروع کارآموزی نیاز به تایید دارند
        </span>
      </div>
      <div className="flex items-center justify-center flex-col sm:flex-row gap-5 w-full sm:w-fit">
        {searchParams.get('verified') != 1 ? (
          <Button
            className="h-auto py-3"
            onClick={() =>
              push(pathName + '?' + createQueryString('verified', '1'))
            }
            icon={<IoReturnDownBack size={20} />}
            type="primary"
          >
            بازگشت
          </Button>
        ) : (
          <>
            <Button
              className="h-auto py-3"
              type="primary"
              icon={<PiNoteLight size={20} />}
              onClick={() =>
                push(pathName + '?' + createQueryString('verified', '2'))
              }
            >
              دانشجو های تایید شده
            </Button>
            <Button
              className="h-auto py-3"
              icon={<GoStop size={20} />}
              onClick={() =>
                push(pathName + '?' + createQueryString('verified', '3'))
              }
            >
              دانشجو های رد شده
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default StudentTitle
