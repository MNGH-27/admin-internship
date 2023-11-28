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
         title: 'سال ورود به دانشگاه',
         dataIndex: 'entrance_year',
         key: 'entrance_year',
      },
      {
         title: '',
         dataIndex: 'opetration',
         key: 'opetration',
         render: (_, data) => (
            <Button
               onClick={() => push(`/dashboard/students/form/${data.id}`)}
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
