'use client'

import { useState } from 'react'

import { Button } from '@atom/index'
import {
  AddTermsModal,
  TermsFilter,
  TermsTable,
} from '@organisms/TermsOrganisms'
import { AiOutlineUserAdd } from 'react-icons/ai'

const TermsTemplate = () => {
  const [isShowAddTermModal, setIsShowAddTermModal] = useState(false)

  return (
    <>
      <div className="flex items-end justify-between mb-5">
        <TermsFilter />

        <Button
          onClick={() => setIsShowAddTermModal(true)}
          icon={<AiOutlineUserAdd size={20} />}
          type="primary"
          className="h-auto py-2"
        >
          اضافه کردن ترم
        </Button>
      </div>

      <TermsTable />

      <AddTermsModal
        isShow={isShowAddTermModal}
        onClose={() => setIsShowAddTermModal(false)}
      />
    </>
  )
}

export default TermsTemplate
