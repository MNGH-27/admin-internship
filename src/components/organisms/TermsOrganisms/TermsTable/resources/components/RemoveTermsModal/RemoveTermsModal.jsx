import { Button, Modal } from '@atom/index'
import { deleteEducationalTermsHttp } from '@core/services'
import toast from 'react-hot-toast'
import { IoPersonRemoveOutline } from 'react-icons/io5'
import { MdOutlineCancel } from 'react-icons/md'
import { useMutation, useQueryClient } from 'react-query'

const RemoveTermsModal = ({ isShow, onClose, data }) => {
  const queryClient = useQueryClient()


  const { mutate, isLoading: isRemovingEducationlTerms } = useMutation({
    mutationFn: () => deleteEducationalTermsHttp({ id: data?.id }),
    onSuccess: (response) => {
      toast.success("استاد با موفقیت حذف شد")
      queryClient.invalidateQueries('master_list')
      onClose()
    }, onError: (error) => {
      toast.error("حذف استاد نا موفق بود")
    }
  })

  return (
    <Modal isShow={isShow} onClose={onClose}>
      <div className="flex flex-col items-start justify-center gap-3">
        <span className="text-[#222124] text-xl font-semibold">حذف شرکت</span>
        <span className="text-[#5F5F61] text-xs">
          آیا از حذف ترم &quot;{data.name}&quot; مطمعن هستید
        </span>
        <div className="flex items-center justify-center gap-2 w-full mt-5">
          <Button
            onClick={() => mutate()}
            loading={isRemovingEducationlTerms}
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

export default RemoveTermsModal
