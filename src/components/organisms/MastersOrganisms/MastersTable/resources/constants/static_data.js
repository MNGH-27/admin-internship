import { Button } from '@atom/index'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
export const getTableData = (openRemoveMaster, openEditMaster) => {
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
      title: 'کد ملی',
      dataIndex: 'nationalCode',
      key: 'nationalCode',
    },
    {
      title: 'دانشکده',
      dataIndex: 'faculty',
      key: 'faculty',
    },
    {
      title: 'شماره تلفن',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'تعداد دانشجو',
      dataIndex: 'studentCount',
      key: 'studentCount',
    },
    {
      title: '',
      dataIndex: 'opetration',
      key: 'opetration',
      render: (_, data) => (
        <div className="flex items-center justify-center gap-x-2">
          <Button
            onClick={() => openEditMaster(data)}
            icon={<AiFillEdit size={20} />}
            type="primary"
          >
            ویرایش
          </Button>
          <Button
            onClick={() => openRemoveMaster(data)}
            icon={<MdDelete size={20} />}
            type="primary"
            className="bg-red-700 hover:!bg-red-900"
          >
            حذف
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
    nationalCode: '1234567890',
    faculty: 'شسی',
    phoneNumber: '09123456789',
    studentCount: '110',
  },
  {
    index: '1',
    firstName: 'عباس',
    lastName: 'عباسی',
    nationalCode: '1234567890',
    faculty: 'شسی',
    phoneNumber: '09123456789',
    studentCount: '110',
  },
  {
    index: '1',
    firstName: 'عباس',
    lastName: 'عباسی',
    nationalCode: '1234567890',
    faculty: 'شسی',
    phoneNumber: '09123456789',
    studentCount: '110',
  },
  {
    index: '1',
    firstName: 'عباس',
    lastName: 'عباسی',
    nationalCode: '1234567890',
    faculty: 'شسی',
    phoneNumber: '09123456789',
    studentCount: '110',
  },
]
