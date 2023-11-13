'use client'

import { TermsDetailTable } from '@organisms/TermsDetailOrganisms'
import { TermsFilter } from '@organisms/TermsOrganisms'

const TermsDetailTempalte = () => {
   return (
      <>
         <TermsFilter />
         <TermsDetailTable />
      </>
   )
}

export default TermsDetailTempalte
