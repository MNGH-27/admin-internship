import { Button, Input, Modal } from '@atom/index'
import { IoPersonRemoveSharp } from 'react-icons/io5'

const RejectStudentModal = ({ isShow, onClose, data }) => {
  return (
    <Modal isShow={isShow} onClose={onClose}>
      <div className="flex flex-col items-start justify-center gap-3">
        <span className="text-[#222124] text-xl font-semibold">
          رد کردن دانشجو
        </span>
        <span className="text-[#5F5F61] text-xs">
          آیا از رد کردن دانشجو به شماره دانشجویی {data?.studentNumber} مطمئن
          هستید؟
        </span>
        <div className="flex flex-col items-start justify-center gap-2 w-full my-3">
          <label className="text-[#5F5F61] text-xs">علت رد دانشجو</label>
          <Input type="textArea" placeholder="توضیحات . . ." name="reject" />
        </div>
        <Button
          icon={<IoPersonRemoveSharp size={20} />}
          type="primary"
          className="!bg-red-700"
        >
          رد کردن
        </Button>
      </div>
    </Modal>
  )
}

export default RejectStudentModal
