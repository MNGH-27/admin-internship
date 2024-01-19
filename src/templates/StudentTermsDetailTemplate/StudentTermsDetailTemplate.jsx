'use client'

import { Button } from '@atom/index'
import { StudentTermsDetailTable } from '@organisms/StudentTermsDetail'
import { TermsFilter } from '@organisms/TermsOrganisms'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { IoReturnDownBack } from 'react-icons/io5'

const StudentTermsDetailTemplate = () => {
   const searchParams = useSearchParams()
   const termId = searchParams.get('termId')

   const { push } = useRouter()

   useEffect(() => {
      if (!termId || termId?.length === 0) {
         push('/dashboard/educational-issues/terms-detail')
      }
   }, [termId])

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
         <StudentTermsDetailTable termId={termId} />
      </>
   )
}

export default StudentTermsDetailTemplate
