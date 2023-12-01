import { Table } from '@atom/index'
import { TABLE_HEADER } from './resources'

const Form4StudentPresense = ({ student_evaluations }) => {
   return (
      <div className="w-full flex flex-col items-start gap-7 mb-16">
         <span className="text-lg font-semibold text-[#101114]">برنامه زمانی حضور در محل کارآموزی</span>
         <Table
            rowKey={(record) => record.id}
            headerList={TABLE_HEADER}
            data={student_evaluations}
            pagination={false}
         />
      </div>
   )
}

export default Form4StudentPresense
