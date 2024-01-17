'use client'

import { useMutation, useQueryClient } from 'react-query'
import toast from 'react-hot-toast'
import { Button, Modal } from '@atom/index'
import { IoPersonRemoveOutline } from 'react-icons/io5'
import { MdOutlineCancel } from 'react-icons/md'
import { deleteNewsHttp } from '@core/services'

const RemoveNewsModal = ({ data, onClose, isShow }) => {
   const queryClient = useQueryClient()

   const { mutate, isLoading: isRemovingComapny } = useMutation({
      mutationFn: () => deleteNewsHttp({ id: data?.id }),
      onSuccess: () => {
         toast.success('خبر با موفقیت حذف شد')
         queryClient.invalidateQueries({ queryKey: ['news_list'] })
         onClose()
      },
      onError: () => {
         toast.error('حذف خبر ناموفق بود')
      },
   })

   return (
      <Modal isShow={isShow} onClose={onClose}>
         <div className="flex flex-col items-start justify-center gap-3">
            <span className="text-[#222124] text-xl font-semibold">حذف شرکت</span>
            <span className="text-[#5F5F61] text-xs">آیا از حذف خبر &quot;{data.title}&quot; مطمئن هستید</span>
            <div className="flex items-center justify-center gap-2 w-full mt-5">
               <Button
                  loading={isRemovingComapny}
                  onClick={() => mutate()}
                  icon={<IoPersonRemoveOutline size={20} />}
                  type="primary"
                  className="bg-red-700 hover:!bg-red-900 h-auto py-2 px-5"
               >
                  حذف
               </Button>
               <Button
                  onClick={onClose}
                  icon={<MdOutlineCancel size={20} />}
                  type="primary"
                  className="bg-gray-400 hover:!bg-gray-600 h-auto py-2 px-5"
               >
                  انصراف
               </Button>
            </div>
         </div>
      </Modal>
   )
}

export default RemoveNewsModal
