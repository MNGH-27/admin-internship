'use client'

import { useState } from 'react'

import { Button, Modal } from '@atom/index'
import moment from 'moment-jalaali'
import { SingleWeeklyReport } from './resources'

const WeeklyReportList = ({ weeks, userId }) => {
   const [weeklyReportId, setWeeklyReportId] = useState()
   const [isShowWeeklyReportModal, setIsShowWeeklyReportModal] = useState(false)

   return (
      <>
         <div className="w-full flex flex-col items-start gap-10 my-24">
            <span className="text-2xl font-semibold">گزارش های هفتگی دانشجو</span>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-5">
               {weeks.map((WeekItem) => (
                  <div
                     onClick={() => {
                        setIsShowWeeklyReportModal(true)
                        setWeeklyReportId(WeekItem.id)
                     }}
                     key={WeekItem.id}
                     className="flex flex-col items-center justify-center gap-4 cursor-pointer border rounded-lg p-3 shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)]"
                  >
                     <span className="text-[#101114] font-semibold text-lg">هفته {WeekItem.id}</span>
                     <span className="text-[#5F5F61] text-sm">
                        روز شروع کارآموزی {moment(WeekItem.first_day_of_week).format('jYYYY/jMM/jDD')}
                     </span>
                     {/* <span className="text-[#101114] font-medium">وضعیت : {getSingleWeekStatus(WeekItem.status)}</span> */}
                     <div className="text-xs text-white flex items-center justify-center flex-wrap gap-1">
                        <span className="bg-green-700/50 px-2 py-1 rounded-md cursor-default">
                           تایید شده : {WeekItem.accepted}
                        </span>
                        <span className="bg-red-700/50 px-2 py-1 rounded-md cursor-default">
                           رد شده : {WeekItem.rejected}
                        </span>
                        <span className="bg-gray-700/50 px-2 py-1 rounded-md cursor-default">
                           بررسی نشده : {WeekItem.not_checked}
                        </span>
                     </div>
                     <div className="flex items-center justify-center gap-3 text-white">
                        <Button type="primary" className="!bg-green-700">
                           تایید هفته
                        </Button>
                        <Button type="primary" className="!bg-red-700">
                           رد هفته
                        </Button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <Modal isShow={isShowWeeklyReportModal} onClose={() => setIsShowWeeklyReportModal(false)}>
            <SingleWeeklyReport userId={userId} weeklyReportId={weeklyReportId} />
         </Modal>
      </>
   )
}

export default WeeklyReportList
