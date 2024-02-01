import { IoCheckmark } from 'react-icons/io5'

export const TABLE_HEADER = [
   {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      render: (_, data, index) => <span>{index + 1}</span>,
   },
   {
      title: 'عنوان',
      dataIndex: 'name',
      key: 'name',
      render: (value) => <p className="max-w-sm whitespace-pre-wrap">{value}</p>,
   },
   {
      title: 'عالی ( 2.5 )',
      dataIndex: 'value',
      key: 'value_1',
      render: (value) => Number(value) === 4 && <IoCheckmark size={20} className="mx-auto" />,
   },
   {
      title: 'خوب ( 2 )',
      dataIndex: 'value',
      key: 'value_2',
      render: (value) => Number(value) === 3 && <IoCheckmark size={20} className="mx-auto" />,
   },
   {
      title: 'متوسط ( 1.5 )',
      dataIndex: 'value',
      key: 'value_3',
      render: (value) => Number(value) === 2 && <IoCheckmark size={20} className="mx-auto" />,
   },
   {
      title: 'ضعیف ( 0.5 )',
      dataIndex: 'value',
      key: 'value_4',
      render: (value) => Number(value) === 1 && <IoCheckmark size={20} className="mx-auto" />,
   },
]

export const DUMMY_DATA = [
   {
      name: 'این یکی عنوان تستی است برای یک متن بلند',
      value: '2',
   },
   {
      name: 'daasdy',
      value: '1',
   },
   {
      name: 'dasdf asf asay',
      value: '3',
   },
   {
      name: 'dsa dfa dsfa dsf',
      value: '1',
   },
   {
      name: 'f3r1',
      value: '2',
   },
]
