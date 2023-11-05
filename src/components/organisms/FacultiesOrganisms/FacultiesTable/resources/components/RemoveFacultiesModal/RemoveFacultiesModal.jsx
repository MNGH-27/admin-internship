import { Button, Modal } from '@atom/index'
import { deleteEducationalFacultiesHttp } from '@core/services'
import { IoPersonRemoveOutline } from 'react-icons/io5'
import { MdOutlineCancel } from 'react-icons/md'
import { useMutation, useQueryClient } from 'react-query'

const RemoveFacultiesModal = ({ isShow, onClose, data }) => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation({
    mutationFn: () => deleteEducationalFacultiesHttp({ id: data?.id }),
    onSuccess: (response) => {
      toast.success('دانشکده با موفقیت حذف شد')

      queryClient.invalidateQueries({ queryKey: ['faculties_list'] })

      onClose()
    },
    onError: (error) => {
      toast.error('حذف کردن دانشکده با مشکل مواجه شد')
    },
  })

  return (
    <Modal isShow={isShow} onClose={onClose}>
      <div className="flex flex-col items-start justify-center gap-3">
        <span className="text-[#222124] text-xl font-semibold">
          حذف دانشکده
        </span>
        <span className="text-[#5F5F61] text-xs">
          آیا از حذف دانشکده &quot;{data?.name}&quot; مطمئن هستید
        </span>
        <div className="flex items-center justify-center gap-2 w-full mt-5">
          <Button
            loading={isLoading}
            onClick={() => mutate()}
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

export default RemoveFacultiesModal
