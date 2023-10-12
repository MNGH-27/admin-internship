import { Button } from '@atom/index'
import { AiFillEdit } from 'react-icons/ai'
import { BiSolidUserDetail } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
export const getTableData = (openDetailModal, openRemoveModal) => {
  const TABLE_HEADER = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'نام شرکت',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'رئیس شرکت',
      dataIndex: 'companyBoss',
      key: 'companyBoss',
    },
    {
      title: 'تلفن',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'شماره ثبت',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '',
      dataIndex: 'opetration',
      key: 'opetration',
      render: (_, data) => (
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Button
            onClick={() => openDetailModal()}
            icon={<BiSolidUserDetail size={20} />}
            className="bg-yellow-700 hover:!bg-yellow-900"
            type="primary"
          >
            جزئیات
          </Button>
          <Button icon={<AiFillEdit size={20} />} type="primary">
            ویرایش
          </Button>
          <Button
            onClick={() => openRemoveModal()}
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
    companyName: 'عباس',
    companyBoss: 'عباسی',
    phoneNumber: '1234567890',
    number: '124123',
  },
  {
    index: '1',
    companyName: 'عباس',
    companyBoss: 'عباسی',
    phoneNumber: '1234567890',
    number: '124123',
  },
  {
    index: '1',
    companyName: 'عباس',
    companyBoss: 'عباسی',
    phoneNumber: '1234567890',
    number: '124123',
  },
  {
    index: '1',
    companyName: 'عباس',
    companyBoss: 'عباسی',
    phoneNumber: '1234567890',
    number: '124123',
  },
]
