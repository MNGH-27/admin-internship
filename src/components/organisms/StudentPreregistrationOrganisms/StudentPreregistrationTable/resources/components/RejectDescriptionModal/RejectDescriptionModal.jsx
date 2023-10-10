import { Button, Modal } from '@atom/index'

const RejectDescriptionModal = ({ isShow, onClose, data }) => {
  return (
    <Modal isShow={isShow} onClose={onClose}>
      <div className="flex flex-col items-start justify-center gap-3">
        <span className="text-[#222124] text-xl font-semibold">
          توضیحات رد شدن دانشجو
        </span>
        <span className="text-[#5F5F61] text-xs">
          دانشجو با شماره دانشجویی {data?.studentNumber} با این توضیحات رد شده
        </span>
        <div className="flex flex-col items-start justify-center gap-2 w-full my-3">
          <label className="text-[#5F5F61] text-xs">علت رد دانشجو</label>
          <p className="bg-gray-200 p-3 rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            consectetur.
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default RejectDescriptionModal
