import { Table } from '@atom/index'
import { DUMMY_DATA, TABLE_HEADER } from './resources'

const Form2PerformanceTable = () => {
   return (
      <div className="w-full flex flex-col items-start gap-10 mb-16">
         <span className="text-lg font-semibold text-[#101114]">برنامه زمانی حضور در محل کارآموزی</span>
         <Table headerList={TABLE_HEADER} data={DUMMY_DATA} pagination={false} />
      </div>
   )
}

export default Form2PerformanceTable
