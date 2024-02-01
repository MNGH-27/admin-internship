import moment from 'moment-jalaali'
import { BiCheckCircle, BiXCircle } from 'react-icons/bi'

export const HEADER = [
   {
      title: 'ردیف',
      dataIndex: 'index',
      key: 'index',
      render: (_, row, index) => <p>{index + 1}</p>,
   },
   {
      title: 'روز',
      dataIndex: 'report_date',
      key: 'report_date',
      render: (report_date) => <p>{moment(report_date).format('ddd jYYYY/jM/jD')}</p>,
   },
   {
      title: 'شرح کار',
      dataIndex: 'report',
      key: 'report',
      render: (report) => <p className="!whitespace-pre-wrap !break-words truncate-twolines min-w-[250px]">{report}</p>,
   },
   {
      title: 'وضعیت',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
         <div className="flex items-center justify-center w-full">
            {status == 2 ? (
               <BiCheckCircle className="text-green-700" size={24} />
            ) : (
               <BiXCircle className="text-red-700" size={24} />
            )}
         </div>
      ),
   },
]
