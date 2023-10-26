import { Button } from '@atom/index'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
export const getTableData = (openEditModal, openRemoveModal) => {
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
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'تاریخ پایان',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'تعداد دانشجو',
      dataIndex: 'students',
      key: 'students',
    },
    {
      title: '',
      dataIndex: 'opetration',
      key: 'opetration',
      render: (_, data) => (
        <div className="flex items-center justify-end gap-2 flex-wrap">
          <Button
            onClick={() => openEditModal(data)}
            icon={<AiFillEdit size={20} />}
            type="primary"
          >
            ویرایش
          </Button>
          <Button
            onClick={() => openRemoveModal(data)}
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
