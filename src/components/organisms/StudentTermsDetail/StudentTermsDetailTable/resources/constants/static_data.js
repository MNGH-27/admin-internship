import { Button } from '@atom/index'
import Link from 'next/link'
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
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'نام خانوادگی',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'شماره ملی',
      dataIndex: 'national_code',
      key: 'national_code',
    },
    {
      title: 'شماره دانشجویی',
      dataIndex: 'student_number',
      key: 'student_number',
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
