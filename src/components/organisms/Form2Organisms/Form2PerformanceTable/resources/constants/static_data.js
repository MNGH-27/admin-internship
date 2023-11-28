import moment from 'moment-jalaali'

export const TABLE_HEADER = [
   {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      render: (_, data, index) => <span>{index + 1}</span>,
   },
   {
      title: 'تاریخ',
      dataIndex: 'date',
      key: 'date',
      render: (current) => <span>{moment(current).format('jYYYY/jMM/jDD')}</span>,
   },
   {
      title: 'فعالیت در دست اجرا',
      dataIndex: 'desc',
      key: 'desc',
   },
]

export const DUMMY_DATA = [
   {
      index: '1',
      date: 'date',
      doing: 'doing',
   },
   {
      index: '1',
      date: 'date',
      doing: 'doing',
   },
   {
      index: '1',
      date: 'date',
      doing: 'doing',
   },
]
