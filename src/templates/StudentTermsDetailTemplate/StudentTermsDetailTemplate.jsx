'use client'

import { StudentTermsDetailTable } from '@organisms/StudentTermsDetail'
import { TermsFilter } from '@organisms/TermsOrganisms'

const StudentTermsDetailTemplate = ({ termId }) => {
   return (
      <>
         <TermsFilter />
         <StudentTermsDetailTable termId={termId} />
      </>
   )
}

export default StudentTermsDetailTemplate
