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
         dataIndex: 'first_name',
         key: 'first_name',
      },
      {
         title: 'نام خانوادگی',
         dataIndex: 'last_name',
         key: 'last_name',
      },
      {
         title: 'دانشکده',
         dataIndex: 'faculty',
         key: 'faculty',
      },
      {
         title: 'شماره ملی',
         dataIndex: 'national_code',
         key: 'national_code',
      },
      {
         title: 'َشماره تلفن',
         dataIndex: 'phone',
         key: 'phone',
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
