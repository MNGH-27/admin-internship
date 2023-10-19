'use client'

import { useClock } from '@core/common'

import moment from 'moment-jalaali'

const DashboardFooter = ({ first_name, last_name }) => {
  return (
    <footer className="border-t-2 border-[#EEEEF2] shadow-[0_-1px_2px_0px_rgba(24,24,28,0.04)]">
      <div className="max-w-7xl py-5 px-3 xl:px-0 flex md:flex-row flex-col gap-y-5 items-center justify-between mx-auto">
        <div className="flex items-center gap-2 text-[#5F5F61] text-sm leading-6">
          کاربر عزیز {first_name && first_name + ' ' + last_name} ، خوش آمدید.
        </div>
        <div className="flex items-center justify-center">
          <p className="px-5 md:border-l-2 md:border-[#EEEEF2] text-sm leading-6">
            <span className="text-[#101114] font-semibold ml-2">تاریخ:</span>
            <span className="text-[#5F5F61] ">
              {moment(new Date()).format('jYYYY/jMM/jDD')}
            </span>
          </p>
          <p className="px-5 text-[#5F5F61] hidden md:block">
            {useClock().time}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default DashboardFooter
