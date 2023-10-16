import { Button, Modal } from '@atom/index'
import { IoPersonRemoveOutline } from 'react-icons/io5'
import { MdOutlineCancel } from 'react-icons/md'

const RemoveTermsModal = ({ isShow, onClose }) => {
  return (
    <Modal isShow={isShow} onClose={onClose}>
      <div className="flex flex-col items-start justify-center gap-3">
        <span className="text-[#222124] text-xl font-semibold">حذف شرکت</span>
        <span className="text-[#5F5F61] text-xs">
          آیا از حذف شرکت مطمعن هستید
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

export default RemoveTermsModal
