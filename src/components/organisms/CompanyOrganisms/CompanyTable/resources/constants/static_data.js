import { Button } from '@atom/index'
import Link from 'next/link'
import { AiFillEdit } from 'react-icons/ai'
import { BiSolidUserDetail } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
export const getTableData = (openDetailModal, openRemoveModal) => {
   const TABLE_HEADER = [
      {
         title: '#',
         dataIndex: 'index',
         key: 'index',
         render: (_, data, index) => <span>{index + 1}</span>,
      },
      {
         title: 'نام شرکت',
         dataIndex: 'company_name',
         key: 'company_name',
      },
      {
         title: 'رئیس شرکت',
         dataIndex: 'company_boss_name',
         key: 'company_boss_name',
      },
      {
         title: 'تلفن',
         dataIndex: 'company_phone',
         key: 'company_phone',
      },
      {
         title: 'شماره ثبت',
         dataIndex: 'company_number',
         key: 'company_number',
      },
      {
         title: '',
         dataIndex: 'opetration',
         key: 'opetration',
         render: (_, data) => (
            <div className="flex items-center justify-center gap-2 flex-wrap">
               <Button
                  onClick={() => openDetailModal(data)}
                  icon={<BiSolidUserDetail size={20} />}
                  className="bg-yellow-700 hover:!bg-yellow-900"
                  type="primary"
               >
                  جزئیات
               </Button>
               <Button
                  href={`/dashboard/company/edit-company?companyId=${data.id}`}
                  as={Link}
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
