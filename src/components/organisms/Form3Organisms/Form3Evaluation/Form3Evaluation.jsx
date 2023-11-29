import { Table } from '@atom/index'
import { TABLE_HEADER } from './resources'

const Form3Evaluation = ({ final_evaluation }) => {
   return (
      <div className="w-full flex flex-col items-start gap-7 mb-16">
         <span className="text-lg font-semibold text-[#101114]">ارزشیابی نهایی کارآموزی </span>
         <Table rowKey={(record) => record.id} headerList={TABLE_HEADER} data={final_evaluation} pagination={false} />
      </div>
   )
}

export default Form3Evaluation
