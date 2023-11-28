import { Table } from '@atom/index'
import { TABLE_HEADER } from './resources'

const Form2AttendanceTable = ({ form2 }) => {
   return (
      <div className="w-full flex flex-col items-start gap-10 mb-16">
         <span className="text-lg font-semibold text-[#101114]">برنامه زمانی حضور در محل کارآموزی</span>
         <Table
            headerList={TABLE_HEADER}
            data={form2.schedule_table.map((obj) => {
               const dayName = Object.keys(obj)[0]
               const innerObject = obj[dayName]
               innerObject.title = dayName
               return innerObject
            })}
            pagination={false}
         />
      </div>
   )
}

export default Form2AttendanceTable
