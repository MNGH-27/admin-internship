import { Button } from '@atom/index'
import { MdDelete } from 'react-icons/md'
import { BiDetail, BiEdit } from 'react-icons/bi'

export const getTableData = (openRemoveModal, onOpenDetailModal, onOpenEditModal) => {
   const TABLE_HEADER = [
      {
         title: '#',
         dataIndex: 'index',
         key: 'index',
         render: (_, data, index) => <span>{index + 1}</span>,
      },
      {
         title: 'عنوان',
         dataIndex: 'title',
         key: 'title',
      },
      {
         title: 'متن',
         dataIndex: 'body',
         key: 'body',
      },
      {
         title: '',
         dataIndex: 'opetration',
         key: 'opetration',
         render: (_, data) => (
            <div className="flex items-center justify-center gap-2 flex-wrap">
               <Button
                  onClick={() => openRemoveModal(data)}
                  icon={<MdDelete size={20} />}
                  type="primary"
                  className="bg-red-700 hover:!bg-red-900"
               >
                  حذف
               </Button>
               <Button
                  onClick={() => onOpenDetailModal(data)}
                  icon={<BiDetail size={20} />}
                  type="primary"
                  className="bg-yellow-700 hover:!bg-yellow-900"
               >
                  مشاهده
               </Button>
               <Button
                  onClick={() => onOpenEditModal(data)}
                  icon={<BiEdit size={20} />}
                  type="primary"
                  className="bg-blue-700 hover:!bg-blue-900"
               >
                  ویرایش
               </Button>
            </div>
         ),
      },
   ]

   return TABLE_HEADER
}
