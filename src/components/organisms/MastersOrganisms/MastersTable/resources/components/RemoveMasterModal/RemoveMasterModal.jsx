import { Button, Modal } from '@atom/index'
import { IoPersonRemoveOutline } from 'react-icons/io5'
import { ImCancelCircle } from 'react-icons/im'
import { MdOutlineCancel } from 'react-icons/md'

const RemoveMasterModal = ({ isShow, onClose, data }) => {
  console.log('data : ', data)

  return (
    <Modal isShow={isShow} onClose={onClose}>
      <div className="flex flex-col items-start justify-center gap-3">
        <span className="text-[#222124] text-xl font-semibold">حذف استاد</span>
        <span className="text-[#5F5F61] text-xs">
          آیا از حذف استاد {data?.firstName} {data?.lastName} مطمئن هستید ؟
        </span>
        <div className="flex items-center justify-center gap-2 w-full my-3">
          <Button
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
