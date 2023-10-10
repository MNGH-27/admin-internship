'use client'

import { useState } from 'react'

import { Button } from '@atom/index'
import {
  MastersAddModal,
  MastersFilter,
  MastersTable,
} from '@organisms/MastersOrganisms'
import { AiOutlineUserAdd } from 'react-icons/ai'

const MastersTemplate = () => {
  const [isShowAddMasterModal, setIsShowAddMasterModal] = useState(false)

  return (
    <>
      <div className="flex items-end justify-between mb-5">
        <MastersFilter />

        <Button
          onClick={() => setIsShowAddMasterModal(true)}
          icon={<AiOutlineUserAdd size={20} />}
          type="primary"
          className="h-auto py-2"
        >
          اضافه کردن استاد
        </Button>
      </div>

      <MastersTable />

      <MastersAddModal
        isShow={isShowAddMasterModal}
        onClose={() => setIsShowAddMasterModal(false)}
      />
    </>
  )
}

export default MastersTemplate
