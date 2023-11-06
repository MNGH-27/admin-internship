'use client'

import { useState } from 'react'

import { Button } from '@atom/index'
import { MastersAddModal, MastersFilter, MastersTable } from '@organisms/MastersOrganisms'
import { AiOutlineUserAdd } from 'react-icons/ai'

const MastersTemplate = () => {
   const [isShowAddMasterModal, setIsShowAddMasterModal] = useState(false)

   return (
      <>
         <div className="flex flex-col sm:flex-row items-end space-y-3 mb-5">
            <MastersFilter />

            <Button
               onClick={() => setIsShowAddMasterModal(true)}
               icon={<AiOutlineUserAdd size={20} />}
               type="primary"
               className="h-auto py-2 w-fit mr-auto"
            >
               اضافه کردن استاد
            </Button>
         </div>

         <MastersTable />

         <MastersAddModal isShow={isShowAddMasterModal} onClose={() => setIsShowAddMasterModal(false)} />
      </>
   )
}

export default MastersTemplate
