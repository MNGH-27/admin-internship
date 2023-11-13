'use client'

import { MasterTermsDetailTable } from '@organisms/MasterTermsDetailOrganisms'
import { TermsFilter } from '@organisms/TermsOrganisms'

const MasterTermDetailTemplate = ({ termId }) => {
   return (
      <>
         <TermsFilter />
         <MasterTermsDetailTable termId={termId} />
      </>
   )
}

export default MasterTermDetailTemplate
