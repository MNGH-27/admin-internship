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
      title: 'نام دانشکده',
      dataIndex: 'facultyName',
      key: 'facultyName',
    },
    {
      title: '',
      dataIndex: 'opetration',
      key: 'opetration',
      render: (_, data) => (
        <div className="flex items-center justify-end gap-2 flex-wrap">
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
    facultyName: 'عباس',
  },
  {
    index: '1',
    facultyName: 'عباس',
  },
  {
    index: '1',
    facultyName: 'عباس',
  },
  {
    index: '1',
    facultyName: 'عباس',
  },
]
