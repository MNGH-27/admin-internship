import React from 'react'

const Form4StudentComment = ({ comment }) => {
   return (
      <div className="w-full flex flex-col items-start gap-4 mb-16">
         <span className="text-lg font-semibold text-[#101114]">اعلام نظر مبسوط دانشجو از محل کارآموزی</span>
         <p className="max-h-[250px] text-sm min-w-full p-3 rounded-lg bg-[#F6F6F6] border-2 border-[#E0E0E0] text-[#222124]">
            {comment}
         </p>
         <p className="flex items-center gap-2 text-sm">
            <span className="text-[#5F5F61]">تاریخ امضای کارآموز:</span>
            <span className="text-[#222124]">1401/06/15</span>
         </p>
      </div>
   )
}

export default Form4StudentComment
