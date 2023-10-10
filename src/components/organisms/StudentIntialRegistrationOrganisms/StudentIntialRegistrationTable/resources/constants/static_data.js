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
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'نام خانوادگی',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'شماره دانشجویی',
      dataIndex: 'studentNumber',
      key: 'studentNumber',
    },
    {
      title: 'سال ورود',
      dataIndex: 'entranceDate',
      key: 'entranceDate',
    },
    {
      title: 'شماره ملی',
      dataIndex: 'nationalCode',
      key: 'nationalCode',
    },
    {
      title: 'شماره تلفن',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
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
    entranceDate: '1205/12/30',
    nationalCode: '9876543210',
    phoneNumber: '147852369',
  },
  {
    index: '1',
    firstName: 'عباس',
    lastName: 'عباسی',
    studentNumber: '1234567890',
    entranceDate: '1205/12/30',
    nationalCode: '9876543210',
    phoneNumber: '147852369',
  },
  {
    index: '1',
    firstName: 'عباس',
    lastName: 'عباسی',
    studentNumber: '1234567890',
    entranceDate: '1205/12/30',
    nationalCode: '9876543210',
    phoneNumber: '147852369',
  },
  {
    index: '1',
    firstName: 'عباس',
    lastName: 'عباسی',
    studentNumber: '1234567890',
    entranceDate: '1205/12/30',
    nationalCode: '9876543210',
    phoneNumber: '147852369',
  },
  {
    index: '1',
    firstName: 'عباس',
    lastName: 'عباسی',
    studentNumber: '1234567890',
    entranceDate: '1205/12/30',
    nationalCode: '9876543210',
    phoneNumber: '147852369',
  },
]
