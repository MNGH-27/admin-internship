import { Table } from '@atom/index'
import { TABLE_HEADER } from './resources'

const Form3StudentPresense = ({ student_evaluations, total_grade }) => {
   return (
      <div className="w-full flex flex-col items-start gap-7 mb-16">
         <span className="text-lg font-semibold text-[#101114]">برنامه زمانی حضور در محل کارآموزی</span>
         <Table
            rowKey={(record) => record.id}
            headerList={TABLE_HEADER}
            data={student_evaluations}
            pagination={false}
         />
         <div className="flex items-center justify-start gap-7">
            <p className="flex items-center gap-2">
               <span className="text-[#5F5F61]">جمع کل : </span>
               <span className="text-[#101114]">{total_grade}</span>
            </p>
            {/* <p className="flex items-center gap-2">
               <span className="text-[#5F5F61]">به حروف :</span>
               <span className="text-[#101114]">بیست</span>
            </p> */}
         </div>
      </div>
   )
}

export default Form3StudentPresense
