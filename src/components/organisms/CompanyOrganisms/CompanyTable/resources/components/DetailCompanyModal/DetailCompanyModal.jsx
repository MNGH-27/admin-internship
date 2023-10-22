import { Modal } from '@atom/index'

const DetailCompanyModal = ({ isShow, onClose, data }) => {

  return (
    <Modal isShow={isShow} onClose={onClose}>
      <div>
        <p className="text-xl mb-7">
          مشاهده ی اطلاعات بیشتر شرکت{' '}
          <span className="font-semibold">{data?.company_name}</span>
        </p>
        <div className="flex gap-5 flex-col w-full">
          <div className="flex items-center justify-between gap-1.5 font-medium">
            <span className="text-gray-400">رئیس شرکت</span>
            <span className="">{data?.company_boss_name}</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 font-medium">
            <span className="text-gray-400">شماره تلفن</span>
            <span className="">{data?.company_phone}</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 font-medium">
            <span className="text-gray-400">شماره ثبت شرکت</span>
            <span className="">{data?.company_registry}</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 font-medium">
            <span className="text-gray-400">شناسه شرکت</span>
            <span className="">{data?.company_number}</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 font-medium">
            <span className="text-gray-400">نمره شرکت</span>
            <span className="">{data?.company_grade}</span>
          </div>
          <div className="flex flex-col items-start justify-between gap-1.5 font-medium max-w-[500px]">
            <span className="text-gray-400">توضیحات شرکت</span>
            <span className="">{data?.caption}</span>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default DetailCompanyModal
