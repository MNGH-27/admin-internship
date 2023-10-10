'use client'
import { useRouter } from 'next/navigation'

import { Table } from '@atom/index'

import { DUMMY_DATA, getTableData } from './resources'

const StudentFormTable = () => {
  const { push } = useRouter()

  return (
    <>
      <Table headerList={getTableData(push)} data={DUMMY_DATA} />
    </>
  )
}

export default StudentFormTable
