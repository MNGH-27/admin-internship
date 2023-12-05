'use client'

import { Button } from '@atom/index'
import { MasterTermsDetailTable } from '@organisms/MasterTermsDetailOrganisms'
import { TermsFilter } from '@organisms/TermsOrganisms'
import { useRouter } from 'next/navigation'
import { IoReturnDownBack } from 'react-icons/io5'

const MasterTermDetailTemplate = ({ termId }) => {
   const { push } = useRouter()

   return (
      <>
         <Button
            className="h-auto mb-2"
            onClick={() => push('/dashboard/educational-issues/terms-detail')}
            icon={<IoReturnDownBack size={20} />}
            type="primary"
         >
            بازگشت
         </Button>
         <TermsFilter />
         <MasterTermsDetailTable termId={termId} />
      </>
   )
}

export default MasterTermDetailTemplate
