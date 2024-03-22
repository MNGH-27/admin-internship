import { Button } from '@atom/index'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
export const getTableData = (openRemoveMaster, openEditMaster) => {
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
         title: 'کد ملی',
         dataIndex: 'national_code',
         key: 'national_code',
      },
      {
         title: 'دانشکده',
         dataIndex: 'faculty',
         key: 'faculty',
      },
      {
         title: 'شماره تلفن',
         dataIndex: 'phone',
         key: 'phone',
      },
      {
         title: '',
         dataIndex: 'opetration',
         key: 'opetration',
         render: (_, data) => (
            <div className="flex items-center justify-center gap-x-2">
               <Button onClick={() => openEditMaster(data)} icon={<AiFillEdit size={20} />} type="primary">
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
