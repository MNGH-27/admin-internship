export const TABLE_HEADER = [
   {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      render: (_, data, index) => <span>{index + 1}</span>,
   },
   {
      title: 'عنوان',
      dataIndex: 'title',
      key: 'title',
   },
   {
      title: 'نمره',
      dataIndex: 'grade',
      key: 'grade',
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
