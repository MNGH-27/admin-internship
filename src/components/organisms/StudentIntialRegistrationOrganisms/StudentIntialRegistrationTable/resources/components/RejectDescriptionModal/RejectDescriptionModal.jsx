'use client'

import { Modal, Spinner } from '@atom/index'
import { getInitialRegestrationUnverifyDescription } from '@core/services'
import { useQuery } from 'react-query'

const RejectDescriptionModal = ({ isShow, onClose, data }) => {
  const { data: userDescription, isSuccess } = useQuery({
    queryKey: [`user_reject_discription_${data?.id}`],
    queryFn: () => getInitialRegestrationUnverifyDescription(data.id),
    enabled: !!data?.id,
  })

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
          {isSuccess ? (
            <p className="bg-gray-200 p-3 rounded-md">
              {userDescription?.message?.description}
            </p>
          ) : (
            <div className="flex items-center justify-center w-full my-3">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}

export default RejectDescriptionModal
