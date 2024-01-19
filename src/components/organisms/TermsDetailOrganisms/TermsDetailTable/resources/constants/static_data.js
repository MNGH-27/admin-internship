import moment from 'moment-jalaali'
import Link from 'next/link'
export const getTableData = () => {
   const TABLE_HEADER = [
      {
         title: '#',
         dataIndex: 'index',
         key: 'index',
         render: (_, data, index) => <span>{index + 1}</span>,
      },
      {
         title: 'نام',
         dataIndex: 'name',
         key: 'name',
      },
      {
         title: 'تاریخ شروع',
         dataIndex: 'start_date',
         key: 'start_date',
         render: (currentData) => <span>{moment(currentData).format('jYYYY/jMM/jDD')}</span>,
      },
      {
         title: 'تاریخ پایان',
         dataIndex: 'end_date',
         key: 'end_date',
         render: (currentData) => <span>{moment(currentData).format('jYYYY/jMM/jDD')}</span>,
      },
      {
         title: 'تعداد دانشجو',
         dataIndex: 'students',
         key: 'students',
         render: (currentData, data) => (
            <Link href={`/dashboard/educational-issues/terms-detail/student?termId=${data.id}`}>{currentData}</Link>
         ),
      },
      {
         title: 'تعداد اساتید',
         dataIndex: 'masters',
         key: 'masters',
         render: (currentData, data) => (
            <Link href={`/dashboard/educational-issues/terms-detail/master?termId=${data.id}`}>{currentData}</Link>
         ),
      },
   ]

   return TABLE_HEADER
}

export const DUMMY_DATA = [
   {
      index: '1',
      name: 'عباس',
      startDate: '1225/12/05',
      endDate: '1225/12/05',
      studentNumber: '12',
   },
   {
      index: '1',
      name: 'عباس',
      startDate: '1225/12/05',
      endDate: '1225/12/05',
      studentNumber: '12',
   },
   {
      index: '1',
      name: 'عباس',
      startDate: '1225/12/05',
      endDate: '1225/12/05',
      studentNumber: '12',
   },
]
