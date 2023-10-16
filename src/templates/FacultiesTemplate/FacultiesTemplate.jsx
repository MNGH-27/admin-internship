'use client'
import { useState } from 'react'
import { Button } from '@atom/index'
import {
  AddFacultiesModal,
  FacultiesTable,
  FacultiesFilter,
} from '@organisms/FacultiesOrganisms'
import { AiOutlineUserAdd } from 'react-icons/ai'

const FacultiesTemplate = () => {
  const [isShowAddFaculty, setIsShowAddFaculty] = useState(false)

  return (
    <div>
      <div className="flex items-end justify-between mb-5">
        <FacultiesFilter />

        <Button
          onClick={() => setIsShowAddFaculty(true)}
          icon={<AiOutlineUserAdd size={20} />}
          type="primary"
          className="h-auto py-2"
        >
          اضافه کردن دانشکده
        </Button>
      </div>
      <FacultiesTable />
      <AddFacultiesModal
        isShow={isShowAddFaculty}
        onClose={() => setIsShowAddFaculty(false)}
      />
    </div>
  )
}

export default FacultiesTemplate
