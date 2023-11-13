import { Button } from '@atom/index'
import { MdOutlineUnfoldMore } from 'react-icons/md'
export const getTableData = (push) => {
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
         title: 'دانشکده',
         dataIndex: 'faculty',
         key: 'faculty',
      },
      {
         title: 'سال ورود به دانشگاه',
         dataIndex: 'entranceDate',
         key: 'entranceDate',
      },
      {
         title: '',
         dataIndex: 'opetration',
         key: 'opetration',
         render: (_, data) => (
            <Button
               onClick={() => push(`/dashboard/students/single-form/${data.index}`)}
               icon={<MdOutlineUnfoldMore size={20} />}
               type="primary"
            >
               مشاهده بیشتر
            </Button>
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
      faculty: 'شسی',
   },
   {
      index: '1',
      firstName: 'عباس',
      lastName: 'عباسی',
      studentNumber: '1234567890',
      entranceDate: '1205/12/30',
      faculty: 'شسی',
   },
   {
      index: '1',
      firstName: 'عباس',
      lastName: 'عباسی',
      studentNumber: '1234567890',
      entranceDate: '1205/12/30',
      faculty: 'شسی',
   },
   {
      index: '1',
      firstName: 'عباس',
      lastName: 'عباسی',
      studentNumber: '1234567890',
      entranceDate: '1205/12/30',
      faculty: 'شسی',
   },
]
