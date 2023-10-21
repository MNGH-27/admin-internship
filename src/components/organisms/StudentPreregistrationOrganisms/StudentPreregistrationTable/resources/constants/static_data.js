import { Button } from '@atom/index'

export const getTableData = (
  openRejectModal,
  openRejectDescription,
  verified,
) => {
  const TABLE_HEADER = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'نام',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'نام خانوادگی',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'شماره دانشجویی',
      dataIndex: 'student_number',
      key: 'student_number',
    },
    {
      title: 'نام شرکت',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'دانشکده',
      dataIndex: 'faculty',
      key: 'faculty',
    },
    {
      title: 'ترم',
      dataIndex: 'term',
      key: 'term',
    },
    {
      title: 'واحد های پاس شده',
      dataIndex: 'passedUnit',
      key: 'passedUnit',
    },
    {
      title: '',
      dataIndex: 'opetration',
      key: 'opetration',
      render: (_, data) => (
        <div className="flex items-center justify-center gap-2">
          <Button
            onClick={() => {
              if (verified === '3') {
                openRejectDescription(data)
              } else {
                openRejectModal(data)
              }
            }}
            type="primary"
            className={`!bg-red-700 hover:!bg-red-900`}
          >
            {verified === '3' ? 'رد شده' : 'رد'}
          </Button>
          <Button disabled={verified === '2'} type="primary">
            تایید
          </Button>
          <Button
            className="!bg-yellow-700 hover:!bg-yellow-900"
            type="primary"
          >
            توضیحات
          </Button>
        </div>
      ),
    },
  ]

  return TABLE_HEADER
}

export const DUMMY_DATA = [
  {
    index: '1',
    firstName: 'عباس',
    lastName: 'عباسی',
    studentNumber: '1234567890',
    companyName: 'asd',
    faculty: 'asdasf',
    term: '12',
    passedUnit: '120',
  },
  {
    index: '1',
    firstName: 'عباس',
    lastName: 'عباسی',
    studentNumber: '1234567890',
    companyName: 'asd',
    faculty: 'asdasf',
    term: '12',
    passedUnit: '120',
  },
  {
    index: '1',
    firstName: 'عباس',
    lastName: 'عباسی',
    studentNumber: '1234567890',
    companyName: 'asd',
    faculty: 'asdasf',
    term: '12',
    passedUnit: '120',
  },
]
