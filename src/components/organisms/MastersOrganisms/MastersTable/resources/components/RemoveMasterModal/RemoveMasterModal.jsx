'use client'

import { useMutation, useQueryClient } from 'react-query'

import { Button, Modal } from '@atom/index'
import { IoPersonRemoveOutline } from 'react-icons/io5'
import { MdOutlineCancel } from 'react-icons/md'
import { deleteMasterHttp } from '@core/services'
import toast from 'react-hot-toast'

const RemoveMasterModal = ({ isShow, onClose, data }) => {
   const queryClient = useQueryClient()

   const { mutate, isLoading: isRemovingMaster } = useMutation({
      mutationKey: ['delete_master'],
      mutationFn: () => deleteMasterHttp({ id: data?.id }),
      onSuccess: () => {
         toast.success('استاد با موفقیت حذف شد')
         queryClient.invalidateQueries({ queryKey: ['master_list'] })
         onClose()
      },
      onError: () => {
         toast.error('حذف استاد نا موفق بود')
      },
   })

   return (
      <Modal isShow={isShow} onClose={onClose}>
         <div className="flex flex-col items-start justify-center gap-3">
            <span className="text-[#222124] text-xl font-semibold">حذف استاد</span>
            <span className="text-[#5F5F61] text-xs">
               آیا از حذف استاد &quot;{data?.first_name} {data?.last_name}&quot; مطمئن هستید ؟
            </span>
            <div className="flex items-center justify-center gap-2 w-full mt-5">
               <Button
                  loading={isRemovingMaster}
                  onClick={mutate}
                  icon={<IoPersonRemoveOutline size={20} />}
                  type="primary"
                  className="bg-red-700 hover:!bg-red-900 h-auto py-2 px-5"
               >
                  حذف
               </Button>
               <Button
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

export default RemoveMasterModal
